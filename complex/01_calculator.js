// 1.
// Hozz létre egy számológépet, amely a következő parancsokat tudja végrehajtani:
// "+ <szám1> <szám2>": összeadja a két számot
// "- <szám1> <szám2>": kivonja <szám1>-ből <szám2>-t
// "* <szám1> <szám2>": összeszorozza a két számot
// "/ <szám1> <szám2>": elosztja <szám1>-t <szám2>-vel

// 2.
// Módosítsd úgy a számológépet, hogy a következő parancsokat is tudja kezelni:
// "+ <szám>": <szám>-ot hozzáadja a legutóbbi eredményhez
// "- <szám>": <szám>-ot kivonja a legutóbbi eredményből
// "* <szám>": <szám>-mal összeszorozza a legutóbbi eredménnyel
// "/ <szám>": <szám>-mal elosztja a legutóbbi eredményt
// Példa:
// + 2 5   -> 7
// + 13    -> 20
// / 5     -> 4

// 3.
// Módosítsd úgy a számológépet, hogy a következő műveleteket is végre tudja hajtani:
// "M": eltárolja a legutóbbi eredményt
// Ha egy műveletnél megjelenik az M, akkor behelyettesíti az értékét az adott pozícióba
// Példa:
// + 2 5    -> 7
// M
// + 10 M   -> 17
// - M 3    -> 4

// 4.
// Módosítsd úgy a számológépet, hogy megjegyezze az utolsó 20 eredményt, és a következő parancsokat is tudja kezelni:
// "R": Kiírja az összes korábbi eredményt
// "R <szám>": Kiírja a <szám>-adik eredményt (0 = a legutóbbi eredmény, 1 = az utolsóelőtti eredmény, stb.)