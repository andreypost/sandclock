import React from 'react'

interface CardProps {
  title: string
}

const Orgs: React.FC<CardProps> = ({ title }: CardProps) => {
  const handleSuggestion = () => {
    console.log(title)
  }
  handleSuggestion()
  return (
    <div>
      <div className="individual">
        <p>{title}</p>
      </div>
    </div>
  )
}
export default Orgs