import {Heading, CustomButton} from './styledComponents'
import './App.css'

const App = () => (
  <>
    <Heading className="heading">Hello World</Heading>

    {/* <CustomButton type="button" color="#ffffff" bgColor="#0070c1">
      Click
    </CustomButton> */}

    {/* <CustomButton type="button" outline={false}>
      Click
    </CustomButton> */}

    <CustomButton type="button">Click</CustomButton>

    {/* <CustomButton type="button" bgColor="#ffffff" color="#0070c1">
      Click
    </CustomButton> */}

    {/* <CustomButton type="button" outline={true}>
      Click
    </CustomButton> */}

    <CustomButton type="button" outline>
      Click
    </CustomButton>
  </>
)
export default App
