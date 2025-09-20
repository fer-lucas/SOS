# SOS Design System Guidelines

## Typography
- **Font**: Manrope (200-800 weights)
- **Avoid**: font-size, font-weight, and line-height Tailwind classes unless specifically requested
- **Use**: CSS variables from globals.css for typography consistency

## Color System
- **Primary Palette**: Black/White with max 20% accent colors
- **Guardiões Colors**: Farol (#F2C200), Íris (#6B7CFF), Joaquina (#2ECC71), Lume (#FFB020), Mira (#00BFA6), Trino (#FF6200), Nexo (#0A84FF)
- **Theme Support**: Light/Dark modes with automatic system preference detection

## Layout Tokens
- **Gap**: var(--gap) = 12px
- **Radius**: var(--radius) = 16px  
- **Max Width**: var(--maxW) = 1024px
- **Responsive**: Mobile-first approach

## Component Rules
- Use Shadcn/ui components from `/components/ui/`
- Keep components small and focused
- Use Motion for animations
- Implement proper loading states
- Maintain accessibility standards

## Responsiveness
- Mobile-first breakpoints
- Navbar transforms to mobile menu
- Maintain usability across all devices
- Test touch interactions

## Performance
- Lazy load components when possible
- Optimize images and assets
- Minimize bundle size
- Use efficient state management