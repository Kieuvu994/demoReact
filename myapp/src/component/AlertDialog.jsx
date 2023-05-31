import * as React from 'react'
import { forwardRef, useImperativeHandle, useState, useEffect } from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import Dialog from '@mui/material/Dialog'
import Api from '../Api'

export default forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const [par, setpar] = useState({})
    




    const handleClickOpen = (val) => {
      console.log('paramm deleet',val)
        setOpen(true);
        setpar(val)
    };



    useImperativeHandle(ref, () => ({
        handleClickOpen
    }))
    

   
    async function funcAgree(){ 
      console.log("Delete --",par.list);
       await Api.delete(par.Service, {
        params:{
          id: par.list??[0]
        },
      }).then((res) => {
        console.log("Delete ", res.data);
   
      }).catch((e)=>
        console.error(e)
      ).finally(
      props.onUpdated()
      
      )
      setOpen(false)
     }

    return (
        <>
            <Dialog
                open={open}
                onClose={()=>setOpen(false)}
                aria-labelledby="alert-dialog-title"
               aria-describedby="alert-dialog-description"
            >
                <DialogTitle sx={{
                    backgroundColor: 'rgba(235,235,235,0.7)'
                }}>
                    {par.title}
                </DialogTitle>
                

                <DialogActions>
                    <div style={{ marginRight: 50, marginTop: 10 , display: 'flex'}} >
                        <Button onClick={()=>setOpen(false)}>Cancel</Button>
                        <Button onClick={funcAgree} variant='contained'>Agree</Button>
                    </div>
                </DialogActions>

            </Dialog>

        </>
    )

})
//<>
    //   <Dialog
    //     open={open}
    //     onClose={setOpen(false)}
    //     aria-labelledby="alert-dialog-title"
    //     aria-describedby="alert-dialog-description"
    //   >
    //     <DialogTitle id="alert-dialog-title">
    //       {"Use Google's location service?"}
    //     </DialogTitle>
    //     <DialogContent>
    //       <DialogContentText id="alert-dialog-description">
    //         Let Google help apps determine location. This means sending anonymous
    //         location data to Google, even when no apps are running.
    //       </DialogContentText>
    //     </DialogContent>
    //     <DialogActions>
    //       <Button onClick={() => setOpen(false)}>Disagree</Button>
    //       <Button onClick={funcAgree} variant='contained'>Agree</Button>
    //     </DialogActions>
    //   </Dialog>
    // </>

