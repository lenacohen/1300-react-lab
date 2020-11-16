import React from 'react';
import ButtonComp from './ButtonComp.jsx';

export default class ListComp extends React.Component {

    render() {
        const tasks = [
            { task: "Bob: " },
            { task: "Clara: " },
            { task: "Isabela: " },
            { task: "Max: " },
            { task: "Bennett: " },
        ];

        return (

            tasks.map((key) =>
                <div>
                    <ButtonComp task={key.task}> </ButtonComp>
                </div>
            )
        )

    }
}
