import { Table, Collapse, Button } from 'reactstrap'
import data from '../assets/data'
import { Fragment, useState } from 'react'

export default function MyTable() {
  const [toggleArray, setToggleArray] = useState([])

  const pushToToggleArray = (elem) => {
    if (toggleArray.some((e) => e === elem)) {
      const newArray = toggleArray.filter((e) => e !== elem)
      return setToggleArray(newArray)
    }
    setToggleArray((prevState) => [...prevState, elem])
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>C</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <Fragment key={i}>
            <tr
              style={
                toggleArray.some((elem) => elem === i)
                  ? {
                      border: '3px solid #0dcaf0',
                      borderBottom: 'none',
                    }
                  : {}
              }
            >
              <td>{item.a}</td>
              <td>{item.b}</td>
              <td>{item.c}</td>
              <td>
                <Button onClick={() => pushToToggleArray(i)}>Toggle</Button>
              </td>
            </tr>
            <tr
              style={
                toggleArray.some((elem) => elem === i)
                  ? {
                      border: '3px solid #0dcaf0',
                      borderTop: 'none',
                    }
                  : {}
              }
            >
              <td colSpan='4'>
                <Collapse isOpen={toggleArray.some((elem) => elem === i)}>
                  <Table>
                    <thead>
                      <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.d.map((nestedItem, i) => (
                        <tr key={i}>
                          <td>{nestedItem.e}</td>
                          <td>{nestedItem.f}</td>
                          <td>{nestedItem.g}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Collapse>
              </td>
            </tr>
          </Fragment>
        ))}
      </tbody>
    </Table>
  )
}
