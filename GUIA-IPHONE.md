# NutriScan en tu iPhone (sin Mac)

Todo se hace desde el iPhone, en Safari. Tardas unos 10 minutos una sola vez.

## 1. Descomprime el zip
1. Abre la app **Archivos** y ve a **Descargas**.
2. Toca **NutriScan-iOS.zip**. Aparecerá una carpeta con 7 archivos.

## 2. Sube los archivos a GitHub
1. En Safari entra en **github.com** con tu cuenta.
2. Toca **+** (arriba) → **New repository**.
   - Nombre: `nutriscan-ios`
   - Márcalo como **Public** (GitHub Pages gratis lo necesita).
   - Toca **Create repository**.
3. Toca **uploading an existing file**.
4. Toca **choose your files** → **Explorar** → entra en la carpeta descomprimida →
   **Seleccionar** → marca **todos** los archivos → **Abrir**.
5. Baja y toca **Commit changes**.

## 3. Activa la web (GitHub Pages)
1. En el repositorio toca **Settings** (si no lo ves, toca **···**).
2. Menú **Pages**.
3. En *Branch* elige **main** y la carpeta **/(root)** → **Save**.
4. Espera 1–2 minutos y recarga. Arriba saldrá:
   *Your site is live at* `https://TU-USUARIO.github.io/nutriscan-ios/`

## 4. Instálala como app
1. Abre ese enlace **en Safari**.
2. Toca el botón **Compartir** (cuadrado con flecha).
3. Toca **Añadir a pantalla de inicio** → **Añadir**.
4. Ya tienes **NutriScan** con su icono. Ábrela siempre desde ahí.

## 5. Activa la IA (Food Lens y Semáforo del súper)
1. En Safari entra en **aistudio.google.com/apikey** con tu cuenta de Google.
2. Toca **Create API key** y cópiala (empieza por `AIza…`).
3. En NutriScan ve a **Perfil → Asistente IA**, pégala y toca **Guardar y probar**.
   Debe aparecer *Conectada*.

La clave es gratuita, con un límite de usos por minuto y por día.
Las fotos se envían a Google solo para analizarlas.

## Qué funciona sin conexión
- Sin internet: diario, perfil, metas, alimentos guardados y crear alimentos a mano.
- Necesita internet: buscar productos nuevos en Open Food Facts, el análisis con IA
  y cargar el escáner la primera vez.

## Actualizar la app
Cuando te pase una versión nueva, sube los archivos al mismo repositorio
(sustituyen a los anteriores). La app se actualiza sola al abrirla con conexión.
