import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link'
type ButtonSize = 'sm' | 'md' | 'lg'

type CommonProps = {
  children: ReactNode
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
}

type ButtonProps =
  | (CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (CommonProps &
      Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
        href: string
      })

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-mode-accent text-mode-accent-contrast shadow-[0_16px_38px_rgba(95,140,81,0.18)] hover:bg-mode-accent/90',
  secondary:
    'border border-mode-ring bg-mode-surface text-text-primary hover:bg-mode-accent-soft',
  ghost: 'text-mode-accent hover:bg-mode-accent-soft',
  link: '!px-0 text-mode-accent hover:text-mode-accent/80',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-medium transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mode-accent disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  )

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
