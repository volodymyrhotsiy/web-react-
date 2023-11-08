function Filters() {
    return <div className="wrapper">
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <div className="btn-group">
                        <button type="button" className="btn btn-success">Filte 1</button>
                        <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="btn-group">
                        <button type="button" className="btn btn-success">Filte 2</button>
                        <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="btn-group">
                        <button type="button" className="btn btn-success">Filte 3</button>
                        <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-success">Apply</button>
                </div>
            </div>
        </div>
    </div>
}

export default Filters;
