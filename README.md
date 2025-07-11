# Rate Updater

Aplicación que permite actualizar tasas desde un Gsheet embebido. 

## Autenticación
Se creó bbdd en Supabase, esta se utiliza exclusivamente para manejar el login de usuarios, validando credenciales almacenadas con contraseñas hasheadas mediante bcrypt.

## Implementación Gsheet

El documento fue embebido en la página lo que permite ser editado directamente desde el iframe, con esto:

- Las ediciones realizadas en el documento gatillan un App script asociado al gsheet que notifica al webhook en caso de cambio de tasa, enviando la información necesaria (ID de operación, nueva tasa y correo).
- Para fines de evaluación, el Google Sheet está actualmente configurado como público. 

En una versión productiva, se implementaría control de permisos por usuario y protección de escritura más robusta, pero para esta entrega se prioriza  la facilidad de revisión.

## Variables de Entorno
Crear un archivo `.env.local` con las siguientes claves:

```env
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
NEXT_PUBLIC_GSHEET=...
```

## Correr en local

Hay que instalar dependencias y correr servidor:

```bash
npm install
npm run dev
```
