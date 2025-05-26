## 🚀 Visualización del Proyecto

🔗 **Proyecto en producción**:  
👉 [quotake.vercel.app](https://quotake.vercel.app/)

### 🛠️ Pasos para ejecutar el proyecto localmente

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/RamaBas/Quotake.git
1. **Instalar dependencias**
   ```bash
   npm install
1. **Iniciar entorno de desarrollo**
   ```bash
   npm run dev

### ✅ Ejecutar tests
1. **Test unitarios**
   ```bash
   npm test
1. **Test con reporte de coverage**
   ```bash
   npm run test:coverage

## Comentarios de Diseño

### — ¿Por qué Vite?

Decidí utilizar Vite como base del proyecto porque ofrece una mayor velocidad tanto en la instalación como en el desarrollo (*hot reload*), así como en el build final, comparado con otras herramientas como `create-react-app`.

### — ¿Por qué React Testing Library + Jest?

Opté por React Testing Library junto con Jest en lugar de Vitest (que viene integrado con Vite), debido a que:
- Es una solución más robusta
- Tiene mayor adopción a nivel empresarial
- En todos los proyectos profesionales en los que participé se utilizó esta combinación

### — ¿Por qué Material UI?

Elegí MUI por:
- Su escalabilidad
- Su sistema de componentes bien estructurado

> **Nota**: Si bien no centralicé todos los estilos en un archivo de `theme` para agilizar el desarrollo, dejé implementadas algunas configuraciones básicas.

### — ¿Por qué i18n?

Integré soporte para i18n para:
- Facilitar la futura internacionalización de la aplicación
- Mantener el enfoque de escalabilidad
- Permitir soporte multilingüe con mínimos cambios