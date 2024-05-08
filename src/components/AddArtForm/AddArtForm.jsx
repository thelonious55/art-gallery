import { Form, Segment, Button } from "semantic-ui-react";
import { useState } from 'react'


export default function AddArtForm({ handleAddArt }) {

    const [state, setState] = useState({
        artist: '',
        year: '',
        info: ''
    })

    const [photo, setPhoto] = useState({})

    function handleFileInput(e) {
        setPhoto(e.target.files[0])
        console.log('button pressed')
    }

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('artist', state.artist)
        formData.append('year', state.year)
        formData.append('info', state.info)
        formData.append('photo', photo)
        setState({
            artist: '',
            year: '',
            info: ''
        })
        setPhoto({
            
        })
        handleAddArt(formData)
    }











    return (
        <Segment>
            <Form autoComplete='off' onSubmit={handleSubmit}>
                <Form.Input
                    className="form-control"
                    name='artist'
                    value={state.artist}
                    placeholder='Artist'
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    className="form-control"
                    name='year'
                    value={state.year}
                    placeholder='Year'
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    className="form-control"
                    name='info'
                    value={state.info}
                    placeholder='Info'
                    onChange={handleChange}
                />
                <Form.Input
                    className="form-control"
                    type="file"
                    name="photo"
                    placeholder="upload image"
                    onChange={handleFileInput}

                />
                <Button type='submit'>
                    Submit
                </Button>
            </Form>
        </Segment>
    )
}