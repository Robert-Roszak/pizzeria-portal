# Dashboard

  - `/`
    - statystyki dzisiejszych zamowien (zdalne i lokalne)
    - lista rezerwacji i eventow zaplanowanych na dzisiaj

# Logowanie

  - `/login`
    - pola na login i haslo
    - guzik do zalogowania (link do dashboardu)

# Widok dostepnosci stolikow

  - `/tables`
    - wybor daty i godziny
    - tabela z lista rezerwacji oraz wydarzen
      - kazda kolumna = 1 stolik
      - kazdy wiersz = 30 min
      - ma przypominac widok tygodnia w kalendarzu googla, gdzie w kolumnach zamiast dni sa stoliki
      - po kliknieciu rezerwacji lub eventu przechodzimy na strone szczegolow
  - `/tables/booking/:id`
    - zawiera wszystkie informacje dt rezerwacji
    - umozliwia edycje i zapisanie zmian
  - `/tables/booking/new`
    - analoginicze do powyzej, bez poczatkowych informacji
  - `/tables/events/:id`
    - analoginicze do powyzej dla eventow
  - `/tables/events/new`
    - analoginicze do powyzej dla eventow, bez poczatkowych informacji

# Widok kelnera

  - `/waiter`
    - tabela
      - wiersze = stoliki
      - kolumny = rozne rodzaje informacji np: status stolika, czas od ostatniej aktywnosci
      - w ostatniej kolumnie dostepne akcje dla danego stolika
  - `/waiter/order/new`
    - numer stolika (edytowalny)
    - menu produktow
    - opcje wybranego produktu
    - zamowienie (zamowione produkty z opcjami i ceny)
    - kwota zamowienia
  - `/waiter/order/:id`
    - jak powyzsza

# Widok kuchni

  - `/kitchen`
    - wyswietla liste zamowien w kolejnosci ich zlozenia
    - lista musi zawierac
      - numer stolika lub zamowienia zdalnego
      - pelne informacje dt zamowionych dan
    - na liscie musi byc mozliwosc oznaczenia zamowienia jako zrealizowane
