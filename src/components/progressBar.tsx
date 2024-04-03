import React from 'react'

const ProgressBar: React.FC<{ percent: number }> = ({percent}) => {
  return (
    <>
      <div style={{ width: '100%', backgroundColor: '#ccc' }}>
        <div style={{ width: `${percent}%`, backgroundColor: '#4caf50', height: '20px' }}></div>
      </div>
    </>
  )
}

export default ProgressBar