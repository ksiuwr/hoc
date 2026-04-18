import{r as t,t as d,j as e,M as u,b,c as l,d as j}from"./index-6r6dTpjw.js";const g={"Zadanie 1: Wczytaj i wypisz":`tekst = input()
print(tekst)`,"Zadanie 2: Suma dwóch liczb":`a = int(input("Podaj pierwszą liczbę: "))
b = int(input("Podaj drugą liczbę: "))
print(a + b)`,"Zadanie 3: Porównywanie":`a = int(input("Podaj pierwszą liczbę: "))
b = int(input("Podaj drugą liczbę: "))
if a > b:
    print(a)
else:
    print(b)`,"Zadanie 1: Skarbiec":`zlote_monety = int(input("Ile masz złotych monet? "))
srebrne_monety = zlote_monety * 3
owce = srebrne_monety * 2
print(owce)`,"Zadanie 2: Klejnoty Kleopatry":`klejnoty = 47
straznicy = klejnoty // 5
print(straznicy)

# Wersja trudniejsza (uwzględniająca resztę, jeśli chcemy chronić wszystkie):
# straznicy = (klejnoty // 5) + 1
# print(straznicy)`,"Zadanie 3: Więzień Cezara":`imie = "Marcus Junius Brutus"
print(len(imie))`,"Zadanie 4: Spis ludności":`imie = input("Podaj imię: ")
nazwisko = input("Podaj nazwisko: ")
print(nazwisko)
print(imie)
# lub: print(nazwisko + " " + imie)`,"Zadanie 5: Sklepik szkolny":`kwota = int(input("Podaj kwotę: "))
if kwota >= 4:
    print("TAK")
else:
    print("NIE")`,"Zadanie 6: Soki bary":`k1 = int(input())
k2 = int(input())
k3 = int(input())
k4 = int(input())
k5 = int(input())

najwiecej = k1
if k2 > najwiecej: najwiecej = k2
if k3 > najwiecej: najwiecej = k3
if k4 > najwiecej: najwiecej = k4
if k5 > najwiecej: najwiecej = k5

print(najwiecej)`,"Zadanie 7: Bankomat":`kwota = int(input("Podaj kwotę do wypłaty: "))
while kwota % 10 != 0:
    print("Błąd! Kwota musi być podzielna przez 10.")
    kwota = int(input("Podaj kwotę do wypłaty: "))
print("Wypłacam gotówkę.")`,"Zadanie 8: Epidemia Zombie":`zombie = 1
for godzina in range(1, 13):
    zombie = zombie * 2
    print("Godzina", godzina, ":", zombie, "zombie")`,"Zadanie 9: Pasek ładowania gry":`for krok in range(1, 11):
    print("#" * krok)`,"Zadanie 10: Bramka na stadionie":`for osoba in range(1, 51):
    if osoba % 13 == 0:
        print("Osoba nr", osoba, "- KONTROLA!")`,"Zadanie 11: Szyfr szpiega":`zdanie = input("Podaj zdanie: ")
szyfr = ""
for znak in zdanie:
    if znak == "a":
        szyfr = szyfr + "@"
    elif znak == " ":
        szyfr = szyfr + "_"
    else:
        szyfr = szyfr + znak
print(szyfr)`,"Zadanie 12: Analityk ocen":`oceny = [4, 5, 3, 5, 4, 2, 5, 6]
suma = 0
for ocena in oceny:
    suma = suma + ocena

srednia = suma / len(oceny)
print("Twoja średnia to:", srednia)

if srednia > 4.0:
    print("Komputer jest Twój!")`,"Zadanie 13: Ewakuacja z labiryntu":`trasa = ["Wejście", "Sala 1", "Most", "Skarbiec"]
for i in range(len(trasa) - 1, -1, -1):
    print(trasa[i])`};function w(){const[r,c]=t.useState(!0),[o,m]=t.useState(0),n=d[o],p=g[n==null?void 0:n.title]||"# Brak przygotowanej odpowiedzi dla tego zadania.";return e.jsxs("div",{className:"flex h-screen bg-gray-50 text-gray-900 font-sans",children:[r&&e.jsxs("div",{className:"w-80 bg-white border-r border-gray-200 flex flex-col shadow-sm overflow-hidden z-10 transition-all duration-300",children:[e.jsx("div",{className:"p-4 border-b border-gray-200 bg-gray-100 flex items-center justify-between",children:e.jsx("h2",{className:"text-lg font-bold text-gray-800",children:"Lista Zadań"})}),e.jsx("div",{className:"flex-1 overflow-y-auto p-2",children:d.map((a,i)=>e.jsx("button",{onClick:()=>m(i),className:`w-full text-left p-3 mb-1 rounded-md transition-colors text-sm ${o===i?"bg-blue-100 text-blue-800 font-medium":"hover:bg-gray-100 text-gray-700"}`,children:a.title},i))})]}),e.jsxs("div",{className:"flex-1 flex flex-col h-full overflow-hidden",children:[e.jsxs("header",{className:"bg-white border-b border-gray-200 p-4 flex items-center shadow-sm",children:[e.jsx("button",{onClick:()=>c(!r),className:"p-2 mr-4 rounded-md hover:bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",title:r?"Ukryj listę":"Pokaż listę",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),e.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Klucz Odpowiedzi (Dla Wolontariuszy)"})]}),e.jsx("main",{className:"flex-1 p-6 overflow-y-auto bg-gray-50",children:n?e.jsxs("div",{className:"max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",children:[e.jsxs("div",{className:"p-6 border-b border-gray-100",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:n.title}),e.jsx("div",{className:"text-sm text-gray-500 mb-4 px-2 py-1 bg-gray-100 inline-block rounded",children:n.category}),e.jsx("div",{className:"prose prose-code:before:content-none prose-code:after:content-none max-w-none text-gray-700 mt-4 border-t border-gray-100 pt-4",children:e.jsx(u,{children:n.description,remarkPlugins:[b],components:{p({children:a}){return e.jsx("p",{className:"mb-4 last:mb-0",children:a})},pre({children:a}){return e.jsx("pre",{className:"bg-gray-100 border border-gray-200 rounded-md p-4 my-4 overflow-x-auto text-sm text-gray-800 whitespace-pre-wrap font-mono",children:a})},code({className:a,children:i,...y}){const s=/language-(\w+)/.exec(a||"");return s?e.jsx(l,{PreTag:"div",language:s[1],customStyle:{margin:0,padding:0,fontSize:"0.9rem",background:"transparent"},children:String(i).replace(/\n$/,"")}):e.jsx("code",{className:`${a||""} font-mono text-sm`,...y,children:i})}}})})]}),e.jsxs("div",{className:"p-6 bg-gray-50 border-b border-gray-100",children:[e.jsx("h3",{className:"text-sm font-bold text-gray-500 uppercase tracking-wider mb-3",children:"Przykładowe Rozwiązanie (Python)"}),e.jsx("div",{className:"rounded-md overflow-hidden border border-gray-200 shadow-sm",children:e.jsx(l,{PreTag:"div",language:"python",showLineNumbers:!0,customStyle:{margin:0,padding:"1rem",fontSize:"0.9rem",borderRadius:"0"},children:p})})]})]}):e.jsx("div",{className:"h-full flex items-center justify-center text-gray-500",children:"Wybierz zadanie z listy po lewej stronie."})})]})]})}j.createRoot(document.getElementById("root")).render(e.jsx(t.StrictMode,{children:e.jsx(w,{})}));
