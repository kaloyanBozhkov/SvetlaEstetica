import '@testing-library/jest-dom/extend-expect'
import { configure } from 'enzyme'
import { createSerializer} from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { enableFetchMocks } from 'jest-fetch-mock'

enableFetchMocks()
configure({ adapter: new Adapter() })

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))