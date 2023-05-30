import * as React from 'react'
import { forwardRef, useImperativeHandle, useState, useEffect } from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import Dialog from '@mui/material/Dialog'
import Api from '../Api';

export default forwardRef((props, ref) => {
    
    //const [add, setAdd] = useState(false)const [open, setOpen] = useState(false);
    const [Name, setName] = useState('');
    const [Company, setCompany] = useState('');
    const [price_in, setprice_in] = useState(0);
    const [price_out, setprice_out] = useState(0);
    const [price_sale, setprice_sale] = useState(0);
    const [type, settype] = useState('');
    const [desc, setdesc] = useState('');
    const [content, setcontent] = useState('');
    const [picture, setpicture] = useState('');
    const [picture1, setpicture1] = useState('');
    const [Material, setMaterial] = useState('');
    const [quantity, setquantity] = useState(0);
    const [id, setid] = useState(0);
    const [dialogToggle, setDialogToggle] = useState(false);
    const openDialog = val => {
        //setSelectedValue('')
        setDialogToggle(true)
        setName(val.Name)
        setCompany(val.Company)
        setprice_in(val.pricePur)
        setprice_out(val.price)
        setprice_sale(val.priceSale)
        settype(val.type)
        setdesc(val.desc)
        setcontent(val.content)
        setpicture(val.picture)
        setpicture1(val.picture1)
        setMaterial(val.Material)
        setquantity(val.quantity)
        setid(val.id)
        

        console.log(val)
    }
    useImperativeHandle(ref, () => ({
        openDialog
    }))




    const [OptionType, setOptionType] = useState([])

    //M990100030/sub/Migration
    useEffect(() => {
        Api.get("code", {
            params: {
                CodeName: 'typ_pro',
            },
        }).then((res) => {
            setOptionType(res.data.data)
            console.log("setOptionType")
        })

    }, [])


    const param = {
        Name: Name,
        Company: Company,
        price_in: price_in,
        price_out: price_out,
        price_sale: price_sale,
        type: type,
        desc: desc,
        content: content,
        picture: picture,
        picture1: picture1,
        Material: Material,
        quantity: quantity,
        id: id,
    }
    async function callApi(){
        await Api.put("Product",param).then(
            ()=>{
                console.log("callApi Update",param);
            }
        ).catch(
            (err)=>console.log(err)
        ).finally(
            
        )
        setDialogToggle(false)
     }

    return (
        <>
            <Dialog
                open={dialogToggle}
                onClose={() => setDialogToggle(false)}

            >
                <DialogTitle sx={{
                    backgroundColor: 'rgba(235,235,235,0.7)'
                }}>
                    Update Product
                </DialogTitle>
                <DialogContent>
                    <TextField
                        defaultValue={Name}
                        id="setName"
                        label="Name product"
                        style={{ width: 250, marginTop: 10 }}
                        onChange={(e) => setName(e.target.value)}
                        size="small"
                        InputProps={{
                            'aria-label': 'weight',
                        }}
                        sx={{
                            marginRight: 2,
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "white",
                            },
                        }}
                    />
                    <TextField
                        defaultValue={Company}
                        id="setCompany"
                        label="Name Company"
                        style={{ width: 250, marginTop: 10 }}
                        onChange={(e) => setCompany(e.target.value)}
                        size="small"
                        InputProps={{
                            'aria-label': 'weight',
                        }}
                        sx={{
                            marginRight: 2,
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "white",
                            },
                        }}
                    />
                    <TextField
                        id="settype"
                        select
                        defaultValue={type}
                        style={{ width: 250, marginTop: 10 , marginRight: 15 }}
                        onChange={(newValue) => settype(newValue.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please select Type Product"
                        variant="standard"
                    >
                        {OptionType?.map((op) => (
                            <option key={op.code} value={op.code}>
                                {op.param_meaning}
                            </option>
                        ))}
                    </TextField>


                    <TextField
                        defaultValue={price_in}
                        id="price_in"
                        label="Purchase Price"
                        style={{ width: 250, marginTop: 10 }}
                        onChange={(e) => setprice_in(e.target.value)}
                        type='number'
                        size="small"
                        InputProps={{
                            'aria-label': 'weight',
                        }}
                        sx={{
                            marginRight: 2,
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "white",
                            },
                        }}
                    />
                    <TextField
                        defaultValue={price_out}
                        id="price_out"
                        label="Initial Price"
                        style={{ width: 250, marginTop: 10 }}
                        onChange={(e) => setprice_out(e.target.value)}
                        size="small"
                        type='number'
                        InputProps={{
                            'aria-label': 'weight',
                        }}
                        sx={{
                            marginRight: 2,
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "white",
                            },
                        }}
                    />
                    <TextField
                        defaultValue={price_sale}
                        id="Discount"
                        label="Discount Price"
                        style={{ width: 250, marginTop: 10 }}
                        onChange={(e) => setprice_sale(e.target.value)}
                        size="small"
                        type='number'
                        InputProps={{
                            'aria-label': 'weight',
                        }}
                        sx={{
                            marginRight: 2,
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "white",
                            },
                        }}
                    />
                    <TextField
                        defaultValue={desc}
                        id="desc"
                        label="Decription "
                        style={{ width: 250, marginTop: 10 }}
                        onChange={(e) => setdesc(e.target.value)}
                        size="small"
                        InputProps={{
                            'aria-label': 'weight',
                        }}
                        sx={{
                            marginRight: 2,
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "white",
                            },
                        }}
                    />
                    <TextField
                        defaultValue={content}
                        id="content"
                        label="Content "
                        style={{ width: 250, marginTop: 10 }}
                        onChange={(e) => setcontent(e.target.value)}
                        size="small"
                        InputProps={{
                            'aria-label': 'weight',
                        }}
                        sx={{
                            marginRight: 2,
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "white",
                            },
                        }}
                    />
                    <TextField
                        defaultValue={picture}
                        id="picture"
                        label="Link Picture"
                        style={{ width: 250, marginTop: 10 }}
                        onChange={(e) => setpicture(e.target.value)}
                        size="small"
                        InputProps={{
                            'aria-label': 'weight',
                        }}
                        sx={{
                            marginRight: 2,
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "white",
                            },
                        }}
                    />
                    <TextField
                        defaultValue={picture1}
                        id="picture1"
                        label="Link Picture"
                        style={{ width: 250, marginTop: 10 }}
                        onChange={(e) => setpicture1(e.target.value)}
                        size="small"
                        InputProps={{
                            'aria-label': 'weight',
                        }}
                        sx={{
                            marginRight: 2,
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "white",
                            },
                        }}
                    />
                    <TextField
                        defaultValue={Material}
                        id="Material"
                        label="Name Material "
                        style={{ width: 250, marginTop: 10 }}
                        onChange={(e) => setMaterial(e.target.value)}
                        size="small"

                        InputProps={{
                            'aria-label': 'weight',
                        }}
                        sx={{
                            marginRight: 2,
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "white",
                            },
                        }}
                    />
                    <TextField
                        defaultValue={quantity}
                        id="quantity"
                        label="Enter Quantity"
                        style={{ width: 250, marginTop: 10 }}
                        onChange={(e) => setquantity(e.target.value)}
                        size="small"
                        type='number'
                        InputProps={{
                            'aria-label': 'weight',
                        }}
                        sx={{
                            marginRight: 2,
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "white",
                            },
                        }}
                    />

                </DialogContent>
                <DialogActions>
                    <div style={{ marginRight: 50, marginTop: 10 , display: 'flex'}} >
                        <Button onClick={()=>setDialogToggle(false)}>Cancel</Button>
                        <Button onClick={callApi} variant='contained'>Update</Button>
                    </div>
                </DialogActions>

            </Dialog>

        </>
    )

})