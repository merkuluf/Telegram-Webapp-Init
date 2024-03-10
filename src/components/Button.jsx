import React from 'react'
import { WebApp, color, sizes } from '../utils/settings'
import 'styles/button.scss'

function Button({
    children,
    type = 'primary',
    disabled = false,
    onClick,
    haptic = 'medium',
    loading = false,
    size = 'large',
}) {
    const hapticType = () => {
        if (haptic == 'light') return 'light'
        if (haptic == 'medium') return 'medium'
        if (haptic == 'heavy') return 'heavy'
        if (haptic == 'rigid') return 'rigid'
        if (haptic == 'soft') return 'soft'
        return 'medium'
    }

    function handleClick(e) {
        if (onClick) onClick(e)
        WebApp.HapticFeedback.impactOccurred(hapticType())
    }

    const typeColor = () => {
        if (type == 'primary') return color.button
        if (type == 'destructive') return color.destructive
        return color.button
    }

    const sizeType = () => {
        if (size == 'small') return sizes.gap_s
        if (size == 'large') return sizes.gap_m
        return sizes.gap_m
    }

    const button_styles = {
        backgroundColor: typeColor(),
        padding: sizeType(),
    }

    return (
        <button
            onClick={handleClick}
            disabled={disabled || loading}
            style={button_styles}
        >
            {children}
        </button>
    )
}

export default Button
