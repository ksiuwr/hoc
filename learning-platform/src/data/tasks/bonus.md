
## Zadanie 7: Bankomat (Trudne)

W nowym banku „Cyberbank 2026” bankomat często się zacina, bo klienci próbują wypłacać dziwne kwoty, np. 13 zł. Bankomat obsługuje tylko banknoty 10 zł, 20 zł i 50 zł. Szef prosi Cię o rozwiązanie tego problemu. Napisz program, który będzie pilnował, aby użytkownik podał kwotę podzielną przez 10.

Program powinien pytać o kwotę tak długo, aż użytkownik poda poprawną wartość. Jeśli kwota jest błędna, wypisz komunikat o błędzie. Gdy kwota jest poprawna, wypisz informację o wypłacie gotówki.

**Przykład działania programu:**

```
Podaj kwotę do wypłaty: 125
Błąd! Kwota musi być podzielna przez 10.
Podaj kwotę do wypłaty: 43
Błąd! Kwota musi być podzielna przez 10.
Podaj kwotę do wypłaty: 200
Wypłacam gotówkę.
```

**Polecenia Pythona:** `input()`, `int()`, `while`, `%`, `!=`, `print()`

## Zadanie 8: Epidemia Zombie (Trudne)

W laboratorium wybuchła epidemia wirusa T. Każda zarażona osoba w ciągu godziny zaraża jedną nową osobę, więc liczba zombie podwaja się co godzinę. Pacjent zero uciekł o godzinie 0:00.

Napisz program, który wypisze liczbę zombie po każdej z 12 godzin.

**Przykład działania programu:**

```
Godzina 1 : 2 zombie
Godzina 2 : 4 zombie
Godzina 3 : 8 zombie
...
Godzina 12 : 4096 zombie
```

**Polecenia Pythona:** `=`, `*`, `for`, `range()`, `print()`

## Zadanie 9: Pasek ładowania gry (Trudne)

Tworzysz grę komputerową. Zamiast nudnych procentów chcesz pokazać graczowi wizualny pasek ładowania, który rośnie krok po kroku.

Napisz program, który symuluje ładowanie od 1 do 10. W każdej linii wypisz znak `#` powielony tyle razy, ile wynosi aktualny numer kroku.

**Przykład działania programu:**

```
#
##
###
####
#####
######
#######
########
#########
##########
```

**Polecenia Pythona:** `for`, `range()`, `*`, `print()`

## Zadanie 10: Bramka na stadionie (Trudne)

Na stadionie co 13-ta osoba musi przejść dodatkową kontrolę bezpieczeństwa. Masz numery biletów od 1 do 50.

Napisz program, który wypisze komunikat tylko dla tych osób, których numer jest podzielny przez 13.

**Przykład działania programu:**

```
Osoba nr 13 - KONTROLA!
Osoba nr 26 - KONTROLA!
Osoba nr 39 - KONTROLA!
```

**Polecenia Pythona:** `for`, `range()`, `%`, `if`, `print()`

## Zadanie 11: Szyfr szpiega (Trudne)

Jesteś agentem wywiadu. Kanał komunikacyjny jest podsłuchiwany, więc umówiliście się na prosty szyfr. Wszystkie litery `a` zamieniacie na `@`, a spacje na `_`.

Napisz program, który pobierze zdanie od użytkownika i wypisze jego zaszyfrowaną wersję.

**Przykład działania programu:**

```
Dane wejściowe:
ala ma kota

Wynik:
@l@_m@_kot@
```

**Polecenia Pythona:** `input()`, `for`, `if`, `else`, `==`, `+`, `print()`

## Zadanie 12: Analityk ocen (Trudne)

Koniec semestru. Masz listę ocen z matematyki i musisz policzyć średnią. Jeśli średnia jest większa niż 4.0, możesz dostać nowy komputer.

Lista ocen:

```
[4, 5, 3, 5, 4, 2, 5, 6]
```

Napisz program, który obliczy średnią ocen z listy i wypisze odpowiedni komunikat.

**Przykład działania programu:**

```
Twoja średnia to: 4.25
Komputer jest Twój!
```

**Polecenia Pythona:** `[]`, `for`, `+`, `/`, `len()`, `if`, `print()`

## Zadanie 13: Ewakuacja z labiryntu (Trudne)

Robot badawczy wjechał do jaskini, zapisując kolejne punkty trasy. Bateria się kończy i robot musi wrócić dokładnie tą samą drogą, ale w odwrotnej kolejności.

Masz listę:
```
["Wejście", "Sala 1", "Most", "Skarbiec"]
```

Wypisz punkty trasy od końca do początku.

**Przykład działania programu:**

```
Skarbiec
Most
Sala 1
Wejście
```

**Polecenia Pythona:** `[]`, `len()`, `range()`, `print()`
