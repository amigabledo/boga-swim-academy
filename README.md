# Boga Swim Academy — Plataforma web oficial

Sitio web oficial de **Boga Swim Academy**, academia de natación cristiana ubicada en Santo Domingo Oeste, República Dominicana. La experiencia digital combina el rigor técnico de la natación con la formación de carácter, principios bíblicos y un diseño editorial de alto nivel orientado a la conversión y confianza familiar.

---

## Concepto e identidad de marca

* **Inspiración del nombre:** Lucas 5:4 (*«Boga mar adentro»*), que representa ir más profundo, atreverse a avanzar, confiar en Dios y superar límites con propósito.
* **Misión:** levantar una generación de líderes capaces de desarrollar sus habilidades de nado.
* **Visión:** ser un medio de expansión para glorificar a Dios en virtud de la natación.
* **Valores:** fe, paz, amor y temor de Dios.
* **Paleta visual:**
  * Color primario: azul marino (`#124285`).
  * Colores secundarios: amarillo sol (`#FBB034`), rojo coral (`#EE4036`) y azul cielo (`#00AEEF`).

---

## Programas y etapas formativas

1. **Mekaddesh (1 a 3 años | Símbolo: foca):** etapa «Descubrir». Adaptación al agua, locomoción asistida, flotación y juegos de afecto.
2. **Hidékel (4 a 7 años | Símbolo: delfín):** etapa «Confiar». Consolidación de confianza, sumersión, saltos e iniciación al estilo crol.
3. **Maranatha (8 a 13 años | Símbolo: tiburón):** etapa «Dominar». Perfeccionamiento de crol e incorporación de dorso, pecho y mariposa.
4. **Ebenezer (14+ años y adultos | Símbolo: pez vela):** etapa «Perfeccionar». Rendimiento, optimización postural, acondicionamiento y salvamento acuático.

---

## Distinciones oficiales

* **Honor Fares:** reconocimiento de nivel avanzado para «abridores de brechas».
* **Honor Josué:** distinción al esfuerzo, la valentía y la perseverancia en el agua.

---

## Estructura técnica y pedagógica

* **Temporada anual:** 10 meses al año (febrero a noviembre, 43 semanas de transformación).
* **Frecuencia:** 1 hora semanal estructurada en inicio (oración y calentamiento), desarrollo técnico intensivo y cierre lúdico.
* **10 principios bíblicos:** un principio trabajado de forma práctica en la piscina durante cada mes del año escolar.

---

## Tecnologías y arquitectura

* **Framework:** React 18 con TypeScript y Vite.
* **Estilos:** Tailwind CSS con paleta temática oficial y animaciones sutiles.
* **Iconografía:** Lucide React.
* **Recursos reales:** fotografías originales de la academia, siluetas de animales oficiales y logotipo vectorial/alta resolución.

---

---

## Historial de mejoras recientes

* **Rediseño visual estético y balance de color:**
  * Se redujo el protagonismo masivo del azul marino en tarjetas y secciones completas.
  * Incorporación de neutros cálidos (`stone-50`, `stone-100`, blancos puros) y acentos en amarillo dorado y pizarra elegante (`slate-900`).
  * Ritmo visual refinado con mayor jerarquía editorial y transiciones armónicas.
* **Tarjeta de previsualización para WhatsApp y redes sociales (Open Graph):**
  * Creación de imagen de previsualización en alta definición (1200 x 630 px) con fondo sólido limpio para visualización perfecta tanto en modo oscuro como claro.
  * Etiquetas de metadatos absolutas (`og:image`, `og:image:secure_url`, `og:image:width`, `og:image:height`, `og:site_name`) compatibles con el crawler de WhatsApp.
* **Sistema de favicons de alta legibilidad:**
  * Generación de favicons adaptados (`favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`) con el imagotipo Boga destacado sobre tarjeta redondeada de alto contraste, visible en cualquier navegador y pestaña.

---

## Flujo de despliegue en Cloudflare Pages

El flujo definitivo de despliegue para este proyecto sigue el estándar establecido:

1. Compilar el código de producción:
   ```bash
   npm run build
   ```

2. Documentar las mejoras en este archivo `README.md`.

3. Registrar los cambios en el control de versiones:
   ```bash
   git add .
   git commit -m "feat: rediseño visual, favicons optimizados y tarjeta WhatsApp"
   ```

4. Desplegar directamente a Cloudflare Pages:
   ```bash
   npx wrangler pages deploy dist --project-name=boga-swim-academy
   ```

---

## Contacto y ubicación

* **Dirección:** Calle 10 de Arroyo Bonito de Manoguayabo #16, Santo Domingo Oeste, República Dominicana.
* **WhatsApp / teléfono:** 849-879-1012.
* **Instagram:** [@bogaswimacademy](https://instagram.com/bogaswimacademy).
