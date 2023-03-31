const DetailsList = ({detail}) => {
    return(
        <div className="detailForm">
            
            <p><strong>User First Name :</strong>{detail.f_name}</p>
            <p><strong>User Second Name :</strong>{detail.l_name}</p>
            <p><strong>User Mobile Number :</strong>{detail.m_number}</p>
            <p><strong>User E-mail :</strong>{detail.email}</p>
            <p><strong>Created Date :</strong>{detail.createdAt}</p>
            
        </div>
    )
}

export default DetailsList