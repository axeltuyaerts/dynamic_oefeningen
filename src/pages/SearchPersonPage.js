import {useState} from "react";
import {Form} from "react-bootstrap";
import {Persons} from "../components/Persons";
import PropTypes from "prop-types";

Persons.propTypes = {title: PropTypes.string};

export function SearchPersonPage(props) {
    const {persons} = props;
    const [search, setSearch] = useState("");
    console.log(persons)
    return (
        <div className="mx-3">
            <div className="m-3">
                <Form>
                    <Form.Label>search</Form.Label>
                    <Form.Control value={search}
                                  onChange={e => setSearch(e.target.value)}/>
                </Form>
            </div>
            <Persons title="search"
                     persons={persons.filter(p => p.name.includes(search) || p.city.includes(search))}
                     isInitiallyOpen={true}/>
        </div>
    );
}