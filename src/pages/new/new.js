import React, { useState, useMemo } from 'react'
import camera from '../../assets/camera.svg'

import api from '../../services/api'
import './new.css'

export default function New({history}) {

	const [ thumbnail, setThumbnail ] = useState(null)
	const [ company, setCompany ] = useState('')
	const [ techs, setTechs ] = useState('')
	const [ price, setPrice ] = useState('')

	const preview = useMemo(() => {
		return thumbnail ? URL.createObjectURL(thumbnail) : null
	}, [thumbnail])

	async function handleSubmit(event) {
		event.preventDefault()
		const user_id = localStorage.getItem('user')
		const data = new FormData()
		data.append('thumbnail', thumbnail)
		data.append('company', company)
		data.append('techs', techs)
		data.append('price', price)

		await api.post('/spots', data, {
			headers: { user_id }
		})

		history.push('/dashboard')
	}

	return (
		<form onSubmit={handleSubmit}>

			<label 
				id="thumbnail" 
				style={{ backgroundImage: `url(${preview})` }}
				className={thumbnail ? "has-thumbnail" : ''}>
				<input 
					type="file"
					onChange={event => setThumbnail(event.target.files[0])}
				/>
				<img src={camera} alt="Select"/>
			</label>
			<label htmlFor="company">BUSINESS *</label>
			<input 
				id="company"
				placeholder="You company name"
				value={company}
				onChange={event => setCompany(event.target.value)}
			/>
			<label htmlFor="techs">TECHNOLOGIES * <span>(comma separeted)</span></label>
			<input 
				id="techs"
				placeholder="What technologies?"
				value={techs}
				onChange={event => setTechs(event.target.value)}
			/>
			<label htmlFor="company">PRICE</label>
			<input 
				id="price"
				placeholder="Price per day"
				value={price}
				onChange={event => setPrice(event.target.value)}
			/>
			<button type="submit" className="btn">Register</button>
		</form>
	)
}