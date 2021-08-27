import React, { useState } from "react";

const Estuidantes = props => {
	const { handleAddItem } = props;
	const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		handleAddItem({
			done: false,
			id: (+new Date()).toString(),
			name,age,gender
		});
		setName("");
        setAge("");
        setGender("");
	};
	return (
		<form onSubmit={handleSubmit}>
			{}
			<div className="todo-list">
				<div className="file-input">
                    <label>Nombre:</label>
					{}
					<input
						type="text"
						className="text"
						value={name}
						onChange={e => setName(e.target.value)}
					/><br/>
                    <label>Edad:</label>
					{}
					<input
						type="text"
						className="text"
						value={age}
						onChange={e => setAge(e.target.value)}
					/><br/>
                    <label>Genero:</label>
					{}
					<input
						type="text"
						className="text"
						value={gender}
						onChange={e => setGender(e.target.value)}
					/><br/>
					{}
					<button
						className="button pink"
						disabled={name && age && gender ? "" : "disabled"}
					>
						Add
					</button>
				</div>
			</div>
		</form>
	);
};

export default Estuidantes;


