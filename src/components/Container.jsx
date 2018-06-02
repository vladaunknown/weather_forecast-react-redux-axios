import React from 'react'
import { connect } from 'react-redux'
import { funcAction } from '../actions'

const Component = ({ data, onClick }) => (
    <section>
        <div onClick={() => onClick(data)}>
          {data}
        </div>
    </section>
)

const mapStateToProps = (state) => {
  return {
  data: state
}}

const mapDispatchToProps = {
  onClick: funcAction
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Container