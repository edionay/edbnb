import React, { useState, useMemo } from 'react'
import camera from '../../assets/camera.svg'
import './new.css'

export default function New() {

	const [ thumbnail, setThumbnail ] = useState(null)
	const [ company, setCompany ] = useState('')
	const [ techs, setTechs ] = useState('')
	const [ price, setPrice ] = useState('')

	const preview = useMemo(() => {
		return thumbnail ? URL.createObjectURL(thumbnail) : null
	}, [thumbnail])

	function handleSubmit() {

	}

	return (
		<form onSubmit={handleSubmit}>

			<label id="thumbnail" style={{ backgroundImage: `url(${preview})` }}>
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