import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../styles/User.css';

function User() {
	const { username } = useParams();
	let navigate = useNavigate();

	const [drink, setDrink] = useState('');
	const [drinkList, setDrinkList] = useState([]);

	const getDrinks = () => {
		Axios.get(`http://localhost:3001/user/get/${username}`)
			.then((response) => {
				setDrinkList(response.data);
			})
			.catch((err) => {
				alert('Error!');
			});
	};

	const addDrink = (e) => {
		e.preventDefault();
		Axios.post('http://localhost:3001/user/add', {
			username: username,
			drink: drink,
		})
			.then(() => {
				setDrinkList([
					...drinkList,
					{
						username: username,
						drink: drink,
					},
				]);
				setDrink('');
			})
			.catch((err) => {
				alert('Drink empty or already exists!');
			});
	};

	const deleteDrink = (val) => {
		Axios.delete(
			`http://localhost:3001/user/delete/${username}/${val.drink}`
		)
			.then((response) => {
				setDrinkList(
					drinkList.filter((item) => {
						return item.drink !== val.drink;
					})
				);
			})
			.catch((err) => {
				alert('Error!');
			});
	};

	const logout = () => {
		navigate('/');
	};

	return (
		<div>
			<p className="welcome">Welcome back, {username}!</p>
			<div className="show">
				<p className="favourites">Your favourites!</p>
				<button
					className="showButton"
					onClick={getDrinks}
				>
					Show drinks
				</button>
			</div>
			{drinkList.map((val) => {
				return (
					<div className="list">
						<li className="listItem">
							{val.drink}
						</li>
						<button
							className="deleteButton"
							onClick={() =>
								deleteDrink(val)
							}
						>
							X
						</button>
					</div>
				);
			})}
			<div className="container">
				<label className="addMessage" htmlFor="drink">
					Add a new drink:
				</label>
				<input
					type="text"
					id="drink"
					value={drink}
					onChange={(e) =>
						setDrink(e.target.value)
					}
				/>
				<button
					className="addButton"
					onClick={addDrink}
				>
					Add
				</button>
			</div>
			<button className="logout" onClick={logout}>
				Logout
			</button>
		</div>
	);
}

export default User;
