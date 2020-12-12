import * as React from 'react';
import { Context } from './CountyLangProvider'

const withCountryLangs = (Component) => (props) => (
    <Context.Consumer>
        {(contexts) => <Component {...props} {...contexts} />}
    </Context.Consumer>
)

export default withCountryLangs