import React from 'react'

const Thumbnail = ({ cover }) => (
  <div className="col-xs-6 col-sm-3">
    <div className="thumbnail">
      <img className="img-responsive" src={ cover }/>
    </div>
  </div>
)

Thumbnail.propTypes = {
  title: React.PropTypes.string,
  cover: React.PropTypes.string
}

export default Thumbnail
