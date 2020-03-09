import React, { useContext } from 'react'
import { connect } from 'react-redux'
import CollectionsContext from '../../contexts/collections/collections.context'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview.component'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import './collections-overview.styles.scss'

const CollectionsOverview = () => {
  const collectionsMap = useContext(CollectionsContext)
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
