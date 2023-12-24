import Table from 'react-bootstrap/Table';

const Listado = ({lista}) => {
    return (
        <>
            <Table className='table-sm table-striped'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(user => {
                        return (
                            <tr key={user.telefono}>
                                <td>{user.nombre}</td>
                                <td>{user.correo}</td>
                                <td>{user.edad}</td>
                                <td>{user.cargo}</td>
                                <td>{user.telefono}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default Listado