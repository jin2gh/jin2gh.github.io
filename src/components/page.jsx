import React from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'

const Page = ({ className, children }) => (
  <>
    <div className={className}>{children}</div>
  </>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
