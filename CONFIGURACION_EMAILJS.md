# Configuración de EmailJS para el formulario de contacto

Para que el formulario envíe correos reales a **rodrigoianez00@gmail.com**, necesitas configurar EmailJS siguiendo estos pasos:

## Paso 1: Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita (permite hasta 200 emails/mes)
3. Verifica tu correo electrónico

## Paso 2: Crear un servicio de email

1. En el dashboard de EmailJS, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona **Gmail** (o el servicio que uses)
4. Conecta tu cuenta de Gmail y autoriza EmailJS
5. **Copia el Service ID** (lo necesitarás después)

## Paso 3: Crear una plantilla de email

1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Configura la plantilla así:

   **Template Name:** `contact_form` (o el nombre que prefieras)

   **Subject:** `Nuevo contacto desde VegaVisual - {{from_name}}`

   **Content (HTML):**
   ```html
   <h2>Nuevo mensaje desde el formulario de contacto</h2>
   
   <p><strong>Nombre:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>
   
   <h3>Mensaje:</h3>
   <p>{{message}}</p>
   
   <hr>
   <p><small>Enviado desde el sitio web VegaVisual</small></p>
   ```

   **To Email:** `rodrigoianez00@gmail.com`

   **From Name:** `{{from_name}}`

   **Reply To:** `{{from_email}}`

4. Guarda la plantilla y **copia el Template ID**

## Paso 4: Obtener tu Public Key

1. Ve a **Account** → **General**
2. Encuentra tu **Public Key** (también llamada API Key)
3. Cópiala

## Paso 5: Actualizar el código

Abre el archivo `script.js` y reemplaza estos valores:

1. **YOUR_PUBLIC_KEY** → Tu Public Key de EmailJS
2. **YOUR_SERVICE_ID** → El Service ID que copiaste en el Paso 2
3. **YOUR_TEMPLATE_ID** → El Template ID que copiaste en el Paso 3

Ejemplo:
```javascript
emailjs.init("abc123xyz456"); // Tu Public Key
...
emailjs.send("service_abc123", "template_xyz456", templateParams)
```

## Paso 6: Probar el formulario

1. Abre `index.html` en tu navegador
2. Llena el formulario de contacto
3. Envía un mensaje de prueba
4. Revisa tu correo en **rodrigoianez00@gmail.com**

## Notas importantes

- El plan gratuito de EmailJS permite 200 emails/mes
- Los correos llegarán directamente a rodrigoianez00@gmail.com
- El remitente recibirá una copia si configuras el "Reply To"
- Puedes personalizar la plantilla de email como quieras

## Solución de problemas

- Si no recibes correos, verifica que el Service ID y Template ID sean correctos
- Asegúrate de que tu Public Key esté bien configurada
- Revisa la consola del navegador (F12) para ver errores
- Verifica que tu cuenta de Gmail esté correctamente conectada en EmailJS
