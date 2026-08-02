# ============================================================
#  CURSA LISTELOR
#  Joc educativ cu timer - Informatica, clasa a IX-a
#  Topic: Clasa list in Python (metode, operatori, output cod)
#
#  Mecanica:
#    - 15 intrebari, 20 secunde fiecare
#    - Raspuns rapid = mai multe puncte (timer bonus)
#    - Streak: raspunsuri consecutive corecte = bonus x2
#    - 3 vieti: time out sau raspuns gresit = -1 viata
#    - Scor final → rang: Bronze / Silver / Gold / Legend
#
#  Rulare: python Cursa_Listelor.py
# ============================================================

import tkinter as tk
import random

# ── Paleta de culori (tema "terminal / hacker") ──
C = {
    "bg":       "#0A0E14",
    "panel":    "#0D1117",
    "border":   "#1C2128",
    "text":     "#CDD9E5",
    "dim":      "#636E7B",
    "neon":     "#39D353",   # verde neon
    "cyan":     "#58A6FF",
    "gold":     "#E3B341",
    "red":      "#F85149",
    "orange":   "#FFA657",
    "purple":   "#BC8CFF",
    "btn_a":    "#0D2137",
    "btn_b":    "#0D2137",
    "btn_c":    "#0D2137",
    "btn_d":    "#0D2137",
    "correct":  "#1A4A2E",
    "wrong":    "#3D1A1A",
    "timer_ok": "#39D353",
    "timer_mid":"#E3B341",
    "timer_low":"#F85149",
}

LITERE = ["A", "B", "C", "D"]
TIMP_MAX = 20          # secunde per intrebare
TOTAL_INTREBARI = 15

# ── Baza de intrebari ──
# format: { "text", "cod" (optional), "variante" [4], "corect" (0-3), "hint" }
INTREBARI = [
    {
        "text": "Ce returneaza len([3, 7, 1, 9, 4])?",
        "cod": None,
        "variante": ["4", "5", "9", "15"],
        "corect": 1,
        "hint": "len() numara elementele listei."
    },
    {
        "text": "Ce afiseaza urmatorul cod?",
        "cod": "lista = [10, 20, 30]\nprint(lista[1])",
        "variante": ["10", "20", "30", "Eroare"],
        "corect": 1,
        "hint": "Indexarea incepe de la 0, deci [1] = al doilea element."
    },
    {
        "text": "Ce afiseaza codul de mai jos?",
        "cod": "lista = [1, 2, 3]\nlista.append(4)\nprint(len(lista))",
        "variante": ["3", "4", "5", "[1,2,3,4]"],
        "corect": 1,
        "hint": "append() adauga un element la sfarsit. Lista devine [1,2,3,4]."
    },
    {
        "text": "Care metoda elimina si returneaza ultimul element?",
        "cod": None,
        "variante": ["remove()", "clear()", "pop()", "del lista[-1]"],
        "corect": 2,
        "hint": "pop() fara argumente scoate si returneaza ultimul element."
    },
    {
        "text": "Ce afiseaza codul?",
        "cod": "a = [1, 2, 3]\nb = [4, 5]\nprint(a + b)",
        "variante": ["[5, 7]", "[1,2,3,4,5]", "Eroare", "[1,2,3][4,5]"],
        "corect": 1,
        "hint": "Operatorul + concateneaza (uneste) doua liste."
    },
    {
        "text": "Ce afiseaza codul?",
        "cod": "lista = [5, 3, 8, 1]\nlista.sort()\nprint(lista[0])",
        "variante": ["5", "3", "1", "8"],
        "corect": 2,
        "hint": "sort() sorteaza lista crescator. Primul element va fi minimul."
    },
    {
        "text": "Care este rezultatul expresiei?",
        "cod": "lista = [10, 20, 30, 20]\nprint(lista.count(20))",
        "variante": ["1", "2", "3", "20"],
        "corect": 1,
        "hint": "count(x) numara de cate ori apare x in lista."
    },
    {
        "text": "Ce afiseaza codul?",
        "cod": "lista = [1, 2, 3, 4, 5]\nprint(lista[-1])",
        "variante": ["1", "4", "5", "Eroare"],
        "corect": 2,
        "hint": "Indexul -1 acceseaza ultimul element al listei."
    },
    {
        "text": "Ce face metoda reverse()?",
        "cod": None,
        "variante": [
            "Sorteaza lista descrescator",
            "Inverseaza ordinea elementelor in lista",
            "Returneaza o noua lista inversata",
            "Elimina duplicatele"
        ],
        "corect": 1,
        "hint": "reverse() modifica lista in loc, inversand ordinea elementelor."
    },
    {
        "text": "Ce afiseaza codul?",
        "cod": "lista = [3, 1, 4, 1, 5]\nprint(min(lista), max(lista))",
        "variante": ["1 5", "3 4", "1 4", "3 5"],
        "corect": 0,
        "hint": "min() returneaza cel mai mic element, max() cel mai mare."
    },
    {
        "text": "Ce afiseaza codul?",
        "cod": "lista = [10, 20, 30]\nlista.insert(1, 99)\nprint(lista)",
        "variante": [
            "[99, 10, 20, 30]",
            "[10, 99, 20, 30]",
            "[10, 20, 99, 30]",
            "[10, 20, 30, 99]"
        ],
        "corect": 1,
        "hint": "insert(i, x) insereaza x la pozitia i, deplasand restul la dreapta."
    },
    {
        "text": "Care expresie verifica daca 7 NU se afla in lista?",
        "cod": "lista = [1, 3, 5, 9]",
        "variante": ["7 in lista", "7 not in lista", "lista.find(7)", "lista.has(7)"],
        "corect": 1,
        "hint": "Operatorul 'not in' verifica absenta unui element."
    },
    {
        "text": "Ce afiseaza codul?",
        "cod": "lista = [0] * 4\nprint(lista)",
        "variante": ["[0, 4]", "[4]", "[0, 0, 0, 0]", "0000"],
        "corect": 2,
        "hint": "Operatorul * repeta lista de 4 ori: [0]*4 = [0,0,0,0]."
    },
    {
        "text": "Ce afiseaza codul?",
        "cod": "lista = [5, 8, 2, 7]\nprint(sum(lista))",
        "variante": ["20", "22", "14", "Eroare"],
        "corect": 1,
        "hint": "sum() returneaza suma tuturor elementelor: 5+8+2+7=22."
    },
    {
        "text": "Ce face lista.clear()?",
        "cod": None,
        "variante": [
            "Sterge lista din memorie",
            "Elimina primul element",
            "Goleste complet lista (devine [])",
            "Sorteaza si elimina duplicatele"
        ],
        "corect": 2,
        "hint": "clear() sterge toate elementele, lista devine vida []."
    },
]


class CursaListelor:

    LATIME   = 820
    INALTIME = 620
    TIMER_W  = 680   # latimea barei de timer
    TIMER_H  = 22

    def __init__(self):
        self.root = tk.Tk()
        self.root.title("🏁 Cursa Listelor — Liste Python")
        self.root.geometry(f"{self.LATIME}x{self.INALTIME}")
        self.root.resizable(False, False)
        self.root.configure(bg=C["bg"])

        # Stare joc
        self.intrebari     = []
        self.idx           = 0
        self.scor          = 0
        self.vieti         = 3
        self.streak        = 0     # raspunsuri corecte consecutive
        self.timp_ramas    = TIMP_MAX
        self.timer_job     = None  # referinta la after()
        self.blocat        = False

        self._build_ui()
        self._ecran_start()
        self.root.mainloop()

    # ───────────────────────────────────────────
    # UI
    # ───────────────────────────────────────────

    def _build_ui(self):
        # Header
        hdr = tk.Frame(self.root, bg=C["panel"], pady=6)
        hdr.pack(fill="x")

        tk.Label(hdr, text="🏁  CURSA LISTELOR",
                 font=("Consolas", 13, "bold"), bg=C["panel"], fg=C["neon"]
                 ).pack(side="left", padx=14)

        self.lbl_hud = tk.Label(hdr, text="",
                                font=("Consolas", 11), bg=C["panel"], fg=C["text"])
        self.lbl_hud.pack(side="right", padx=14)

        # Bara timer (canvas)
        timer_frame = tk.Frame(self.root, bg=C["bg"], pady=6)
        timer_frame.pack(fill="x", padx=20)

        tk.Label(timer_frame, text="TIMP", font=("Consolas", 9),
                 bg=C["bg"], fg=C["dim"]).pack(side="left")

        self.canvas_timer = tk.Canvas(timer_frame, width=self.TIMER_W,
                                      height=self.TIMER_H, bg=C["border"],
                                      highlightthickness=1,
                                      highlightbackground=C["border"])
        self.canvas_timer.pack(side="left", padx=8)

        self.lbl_timp = tk.Label(timer_frame, text="20s",
                                 font=("Consolas", 11, "bold"),
                                 bg=C["bg"], fg=C["neon"], width=4)
        self.lbl_timp.pack(side="left")

        self.lbl_streak = tk.Label(timer_frame, text="",
                                   font=("Consolas", 10), bg=C["bg"], fg=C["gold"])
        self.lbl_streak.pack(side="right", padx=14)

        # Zona intrebare
        q_frame = tk.Frame(self.root, bg=C["panel"], padx=16, pady=10)
        q_frame.pack(fill="x", padx=12, pady=(0, 4))

        self.lbl_nr = tk.Label(q_frame, text="",
                               font=("Consolas", 9), bg=C["panel"], fg=C["dim"])
        self.lbl_nr.pack(anchor="w")

        self.lbl_intrebare = tk.Label(q_frame, text="",
                                      font=("Consolas", 12, "bold"),
                                      bg=C["panel"], fg=C["cyan"],
                                      wraplength=780, justify="left", anchor="w")
        self.lbl_intrebare.pack(fill="x", pady=(4, 6))

        # Bloc cod (apare doar daca intrebarea are cod)
        self.cod_frame = tk.Frame(self.root, bg="#0D1117", padx=16, pady=0)
        self.cod_frame.pack(fill="x", padx=12, pady=(0, 4))

        self.lbl_cod = tk.Label(self.cod_frame, text="",
                                font=("Courier New", 11),
                                bg="#0D1117", fg=C["neon"],
                                justify="left", anchor="w")
        self.lbl_cod.pack(anchor="w")

        # Butoane raspuns
        btn_frame = tk.Frame(self.root, bg=C["bg"])
        btn_frame.pack(fill="both", expand=True, padx=12, pady=4)

        self.butoane = []
        for i in range(4):
            r, col = divmod(i, 2)
            btn = tk.Button(
                btn_frame,
                text="", font=("Consolas", 11),
                bg=C["btn_a"], fg=C["text"],
                activebackground="#1C3050",
                relief="flat", bd=0,
                padx=12, pady=10,
                wraplength=370, justify="left", anchor="w",
                cursor="hand2",
                command=lambda idx=i: self._raspuns(idx)
            )
            btn.grid(row=r, column=col, padx=5, pady=4, sticky="nsew")
            self.butoane.append(btn)

        btn_frame.columnconfigure(0, weight=1)
        btn_frame.columnconfigure(1, weight=1)
        btn_frame.rowconfigure(0, weight=1)
        btn_frame.rowconfigure(1, weight=1)

        # Hint / feedback
        self.lbl_feedback = tk.Label(self.root, text="",
                                     font=("Consolas", 10, "italic"),
                                     bg=C["bg"], fg=C["dim"],
                                     wraplength=780)
        self.lbl_feedback.pack(pady=(2, 6))

        # Buton continua
        self.btn_continua = tk.Button(self.root, text="",
                                      font=("Consolas", 11, "bold"),
                                      relief="flat", bd=0, padx=20, pady=8,
                                      cursor="hand2")

    # ───────────────────────────────────────────
    # ECRAN START
    # ───────────────────────────────────────────

    def _ecran_start(self):
        self._stop_timer()
        self._set_timer_bar(1.0, C["neon"])
        self.lbl_hud.config(text="")
        self.lbl_streak.config(text="")
        self.lbl_timp.config(text=f"{TIMP_MAX}s", fg=C["neon"])
        self.lbl_nr.config(text="")
        self.lbl_intrebare.config(
            text="Bine ai venit la Cursa Listelor!\n\n"
                 "Ai 20 de secunde pentru fiecare intrebare.\n"
                 "Raspunzi mai repede → castigi mai multe puncte.\n"
                 "Streak-ul de raspunsuri corecte iti da bonus x2!\n"
                 "Ai 3 vieti. Succes!"
        )
        self.lbl_cod.config(text="")
        self.lbl_feedback.config(text="")

        for btn in self.butoane:
            btn.config(text="", state="disabled", bg=C["btn_a"])

        self.btn_continua.pack_forget()
        self.btn_continua.config(
            text="▶  START CURSA",
            bg=C["neon"], fg="#000000",
            activebackground="#2DBD49",
            command=self._start_joc
        )
        self.btn_continua.pack(pady=6)

    def _start_joc(self):
        self.btn_continua.pack_forget()
        self.intrebari = INTREBARI.copy()
        random.shuffle(self.intrebari)
        self.intrebari = self.intrebari[:TOTAL_INTREBARI]
        self.idx = 0
        self.scor = 0
        self.vieti = 3
        self.streak = 0
        self._urmatoarea_intrebare()

    # ───────────────────────────────────────────
    # LOGICA INTREBARE
    # ───────────────────────────────────────────

    def _urmatoarea_intrebare(self):
        if self.idx >= len(self.intrebari):
            self._ecran_final()
            return

        self.blocat = False
        self.timp_ramas = TIMP_MAX
        q = self.intrebari[self.idx]

        # HUD
        self._update_hud()
        self.lbl_nr.config(text=f"Intrebarea {self.idx + 1} / {len(self.intrebari)}")

        # Intrebare
        self.lbl_intrebare.config(text=q["text"])

        # Cod (daca exista)
        if q["cod"]:
            self.lbl_cod.config(text=q["cod"], pady=8)
            self.cod_frame.config(pady=8)
        else:
            self.lbl_cod.config(text="", pady=0)
            self.cod_frame.config(pady=0)

        # Variante
        for i, btn in enumerate(self.butoane):
            btn.config(
                text=f"  {LITERE[i]}.  {q['variante'][i]}",
                bg=C["btn_a"], fg=C["text"],
                state="normal"
            )

        self.lbl_feedback.config(text="")
        self.btn_continua.pack_forget()

        # Porneste timer
        self._stop_timer()
        self._tick()

    def _tick(self):
        """Decrementeaza timerul si redeseneaza bara."""
        if self.blocat:
            return

        fractie = self.timp_ramas / TIMP_MAX

        # Culoarea barei depinde de timp ramas
        if fractie > 0.5:
            culoare = C["timer_ok"]
        elif fractie > 0.25:
            culoare = C["timer_mid"]
        else:
            culoare = C["timer_low"]

        self._set_timer_bar(fractie, culoare)
        self.lbl_timp.config(text=f"{self.timp_ramas}s", fg=culoare)

        if self.timp_ramas <= 0:
            self._timp_expirat()
            return

        self.timp_ramas -= 1
        self.timer_job = self.root.after(1000, self._tick)

    def _stop_timer(self):
        if self.timer_job:
            self.root.after_cancel(self.timer_job)
            self.timer_job = None

    def _set_timer_bar(self, fractie, culoare):
        self.canvas_timer.delete("all")
        w = int(self.TIMER_W * max(0, fractie))
        if w > 0:
            self.canvas_timer.create_rectangle(0, 0, w, self.TIMER_H,
                                               fill=culoare, outline="")

    def _timp_expirat(self):
        self.blocat = True
        self._stop_timer()
        self.vieti -= 1
        self.streak = 0
        self._update_hud()

        q = self.intrebari[self.idx]
        corect_idx = q["corect"]

        for btn in self.butoane:
            btn.config(state="disabled")
        self.butoane[corect_idx].config(bg=C["correct"], fg=C["neon"])

        self.lbl_feedback.config(
            text=f"⏰ Timp expirat!  Raspuns corect: {LITERE[corect_idx]}.  {q['hint']}",
            fg=C["orange"]
        )
        self._set_timer_bar(0, C["red"])

        if self.vieti <= 0:
            self.root.after(1500, self._ecran_final)
        else:
            self._arata_continua()

    def _raspuns(self, ales):
        if self.blocat:
            return
        self.blocat = True
        self._stop_timer()

        q = self.intrebari[self.idx]
        corect = q["corect"]

        for btn in self.butoane:
            btn.config(state="disabled")

        if ales == corect:
            # CORECT — puncte bazate pe timp ramas + streak
            timp_bonus = self.timp_ramas * 5
            streak_bonus = 50 if self.streak >= 2 else 0
            puncte = 100 + timp_bonus + streak_bonus
            self.scor += puncte
            self.streak += 1

            self.butoane[ales].config(bg=C["correct"], fg=C["neon"])
            streak_txt = f"  🔥 Streak x{self.streak}! +{streak_bonus}" if streak_bonus else ""
            self.lbl_feedback.config(
                text=f"✅ Corect! +{puncte} puncte  (timp: +{timp_bonus}{streak_txt})",
                fg=C["neon"]
            )
        else:
            # GRESIT
            self.vieti -= 1
            self.streak = 0
            self.butoane[ales].config(bg=C["wrong"], fg=C["red"])
            self.butoane[corect].config(bg=C["correct"], fg=C["neon"])
            self.lbl_feedback.config(
                text=f"❌ Gresit.  {q['hint']}",
                fg=C["red"]
            )

        self._update_hud()

        if self.vieti <= 0:
            self.root.after(1400, self._ecran_final)
        else:
            self._arata_continua()

    def _arata_continua(self):
        ultima = self.idx >= len(self.intrebari) - 1
        self.btn_continua.config(
            text="✅  FINAL — Vezi rezultatul" if ultima else "▶  Urmatoarea intrebare",
            bg=C["cyan"] if ultima else C["neon"],
            fg="#000000",
            activebackground="#3C96D4" if ultima else "#2DBD49",
            command=self._next
        )
        self.btn_continua.pack(pady=6)

    def _next(self):
        self.btn_continua.pack_forget()
        self.idx += 1
        self._urmatoarea_intrebare()

    def _update_hud(self):
        inimi = "❤" * self.vieti + "🖤" * (3 - self.vieti)
        self.lbl_hud.config(text=f"{inimi}   {self.scor} pct")
        streak_txt = f"🔥 Streak: {self.streak}" if self.streak >= 2 else ""
        self.lbl_streak.config(text=streak_txt)

    # ───────────────────────────────────────────
    # ECRAN FINAL
    # ───────────────────────────────────────────

    def _ecran_final(self):
        self._stop_timer()
        self.blocat = True

        # Calculeaza rang
        max_scor = TOTAL_INTREBARI * (100 + TIMP_MAX * 5 + 50)
        procent = self.scor / max_scor * 100

        if procent >= 85:
            rang, culoare_rang = "🏆  LEGEND", C["gold"]
        elif procent >= 65:
            rang, culoare_rang = "🥇  GOLD",   C["gold"]
        elif procent >= 45:
            rang, culoare_rang = "🥈  SILVER", "#C0C0C0"
        else:
            rang, culoare_rang = "🥉  BRONZE", "#CD7F32"

        # Curata interfata
        self.lbl_nr.config(text="REZULTAT FINAL")
        self.lbl_intrebare.config(
            text=f"Scor: {self.scor} puncte\nRang: {rang}",
            fg=culoare_rang
        )
        self.lbl_cod.config(text="")
        self.lbl_feedback.config(
            text=f"Raspunsuri corecte: ~{self.scor // 100} din {TOTAL_INTREBARI}  |  "
                 f"Streak maxim inregistrat",
            fg=C["dim"]
        )

        for btn in self.butoane:
            btn.config(text="", state="disabled", bg=C["btn_a"])

        self._set_timer_bar(self.scor / max_scor, culoare_rang)
        self.lbl_timp.config(text="", fg=C["neon"])
        self.lbl_streak.config(text="")
        self._update_hud()

        self.btn_continua.config(
            text="🔄  Joaca din nou",
            bg=C["neon"], fg="#000000",
            activebackground="#2DBD49",
            command=self._ecran_start
        )
        self.btn_continua.pack(pady=8)


# ───────────────────────────────────────────────────────────
if __name__ == "__main__":
    CursaListelor()
