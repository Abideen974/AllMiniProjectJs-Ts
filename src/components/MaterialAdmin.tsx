import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import Typography from '@mui/material/Typography';
import PrintIcon from '@mui/icons-material/Print';

function MaterialAdmin() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      

      const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      
  return (
    <div>
        <div className="container mt-2">
        <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                        <Item>Dashboard</Item>
                        </Grid>
                        <Grid item xs={12} md={3} lg={3} sm={6} >
                        
                              <Card >
                                  <CardContent>
                                     
                                      <Typography variant="h5" component="div" align='right'>
                                       Booking
                                       <br />
                                       85
                                   
                                      </Typography>
                                  
                                      <hr />
                                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                      adjective
                                      </Typography>
                                  
                                  </CardContent>
            
                              </Card>
                       
                        </Grid>


                        <Grid item xs={12} md={3} lg={3} sm={6} >
                        
                              <Card >
                                  <CardContent>
                                   
                                      <Typography variant="h5" component="div" align='right'>
                                   Total user <br /> 45
                                
                                     
                                      </Typography>
                                  
                                      <hr />
                                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                      adjective
                                      </Typography>
                                  
                                  </CardContent>
            
                              </Card>
                       
                        </Grid>

                        <Grid item xs={12} md={3} lg={3} sm={6}>
                        
                              <Card>
                                  <CardContent>
                                      
                                      <Typography variant="h5" component="div" align='right'>
                                        revenue <br />
                                        47k
                                      
                                      </Typography>
                                  
                                      <hr />
                                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                      last week
                                      </Typography>
                                  
                                  </CardContent>
            
                              </Card>
                       
                        </Grid>


                        <Grid item xs={12} md={3} lg={3} sm={6}>
                        
                              <Card >
                                  <CardContent>
                                   
                                      <Typography variant="h5" component="div" align='right'>
                                        followers
                                        <br />
                                      +1001
                                      </Typography> 
                                      <hr />
                                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                      Just updated
                                      </Typography>
                                  
                                  </CardContent>
            
                              </Card>
                       
                        </Grid>

                        <Grid item xs={12} md={4} lg={4} sm={6}>
                        
                              <Card sx={{ bgcolor: 'primary.main' , minHeight: 140}} >
                                  <CardContent>
                                    
                                  </CardContent>
            
                              </Card>
                       
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} sm={6}>
                        
                              <Card  sx={{ bgcolor: 'success.main', minHeight: 140 }}>
                                  <CardContent>
                                   
                                  
                                  </CardContent>
            
                              </Card>
                       
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} sm={12}>
                        
                              <Card  sx={{ bgcolor: 'warning.main' ,minHeight: 140 }}>
                                  <CardContent>
                                     
                                      
                                  
                                  </CardContent>
            
                              </Card>
                       
                        </Grid>

                        
                        <Grid item xs={12} md={8} lg={8} sm={12}>
                        
                        <Card  sx={{ minHeight: 140 }}>
                            <CardContent>
                               
                            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
                            
                            </CardContent>
      
                        </Card>
                 
                  </Grid>
                  <Grid item xs={12} md={4} lg={4} sm={12} >
                        
                        <Card  sx={{  minHeight: 140 }}>
                            <CardContent>
                               
                            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
                            
                            </CardContent>
      
                        </Card>
                 
                  </Grid>
                    </Grid>
            </Box>
        </div>
       
    </div>
  )
}

export default MaterialAdmin