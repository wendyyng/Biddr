import React from 'react';

const NewAuctionForm = props => {
    
    const getDataAndSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        console.log(fd.get("title"), fd.get("reserve_price"), fd.get("description"))
        props.submitForm(
            {
                title: fd.get("title"),
                description: fd.get("description"),
                reserve_price: fd.get("reserve_price"),
                ends_at: fd.get("ends_at"),
                created_at: new Date(),
                status: "draft",
                img_url: fd.get("img_url")
            }
        )

        event.currentTarget.reset()

    }

    return(
        <form onSubmit={getDataAndSubmit} className="p-3">
            <div className="form-group m-2">
                <label htmlFor="title">Title*</label>
                <br />
                <input className="form-control" type="text" name="title" id="" required="required" placeholder="3 Year Old Macbook"/>

            </div>
            <div className="form-group m-2">
                <label htmlFor="description">Description*</label>
                <br />
                <input className="form-control" type="text" name="description" id="" required="required" placeholder="Details*"/>

            </div>
            <div className="form-group m-2">
                <label htmlFor="ends_at">Ends at*</label>
                <br />
                <input className="form-control" type="date" name="ends_at" id="" required="required"/>

            </div>
            <div className="form-group m-2">
                <label htmlFor="reserve_price">Reserve Price*</label>
                <br />
                <input className="form-control" type="number" name="reserve_price" id="" step="1" required="required" min="1" placeholder="1000"/>

            </div>
            <div className="form-group m-2">
                <label htmlFor="reserve_price">Image Url</label>
                <br />
                <input className="form-control" type="text" name="img_url" id="img_url" placeholder="Image URL"/>
            </div>
            <div>
                <input className="btn btn-secondary mt-3" type="submit" value="Save" />
            </div>
            
        </form>
    )


}

export default NewAuctionForm;