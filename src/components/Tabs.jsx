import React, { useState } from 'react'

const Tabs = (props) => {

    const [tabs, setTabs] = useState([
        {
            title: 'Tab 1',
            content: "this is the content of tab 1"
        },
        {
            title: "Tab 2",
            content: "this is the content of tab 2"
        },
        {
            title: "Tab 3",
            content: "this is the content of tab 3"
        }
    ])

    const [selectedTab, setSelectedTab] = useState(0);

    const onClick = (value) => {
        console.log(value)
        setSelectedTab(value);
    }
    return (
        <div>
            {
                tabs.map((tabs, index) => {
                    return <button key={index} onClick={() => onClick(index)}>{tabs.title}</button>
                })
            }
            <p>{tabs[selectedTab].content}</p>
        </div>
    )
}

export default Tabs