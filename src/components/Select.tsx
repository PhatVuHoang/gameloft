import { useState, ChangeEvent } from 'react'

interface Option {
  label: string
  value: string
  disabled?: boolean
}

interface SelectProps {
  options: Option[]
  onSelect: (selectedValue: string) => void
  className?: string
}

export default function Select({ onSelect, options, className }: SelectProps) {
  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    setSelectedOption(selectedValue)
    onSelect(selectedValue)
  }

  return (
    <select
      className={`border-primary border p-2 rounded text-primary outline-none bg-white ${className}`}
      value={selectedOption}
      onChange={handleSelectChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
