import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'MusicZone',
  description: 'We sell the best products for cheap price',
  keywords: 'music, sound, buy earphone, cheap earphones',
}

export default Meta
