import React from "react";
import { useForm } from "react-hook-form";
import '../NavBar/NavBar.css'
import swal from 'sweetalert'

export default function Formulario({setBuyer }) {
  const { register, handleSubmit, formState:{errors}} = useForm();

  const onSubmit = (data, e ) => { 
  setBuyer(data)

  swal({
    title: "Datos agregados correctamente",
    text: "ya puede crear la orden",
    icon: "success",
    button: "Aceptar",
    timer:"4000"
  });
  e.target.reset();
  }

  

  return (
    <div>            
        <h2>Complete el Formulario para generar la orden</h2>
        <form onSubmit={handleSubmit(onSubmit) }>
            <div>
                <label>Nombre</label>
                <input type="text" name="nombre" {...register('nombre',{ required: true, maxLength: 20 })}/>
                {errors.nombre?.type ==='required' && <p> * El campo es requerido</p>}
                {errors.nombre?.type ==='maxLength' && <p> * Debe de ser menos de 20 caracteres</p>}
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" name="apellido" {...register('apellido',{ required: true, maxLength: 15 })}/>
                {errors.apellido?.type ==='required' && <p> * El campo es requerido</p>}
                {errors.apellido?.type ==='maxLength' && <p> * Debe de ser menos de 15 caracteres</p>}
            </div>
            <div>    
                <label>Dirección</label>
                <input type="text" name="direccion" {...register('direccion',{ required: true, maxLength: 30 })}/>
                {errors.direccion?.type ==='required' && <p> * El campo es requerido</p>}
                {errors.direccion?.type ==='maxLength' && <p> * Debe de ser menos de 30 caracteres</p>}
            </div>
            <div>    
                <label>Localidad</label>
                <input type="text" name="localidad" {...register('localidad',{ required: true, maxLength: 15 })}/>
                {errors.localidad?.type ==='required' && <p> * El campo es requerido</p>}
                {errors.localidad?.type ==='maxLength' && <p> * Debe de ser menos de 15 caracteres</p>}
            </div>
            <div>
                <label>E-mail</label>
                <input type="email" name="email" {...register('email',{ required: true, pattern:/\S+@\S+\.\S+/ })}/>
                {errors.localidad?.type ==='required' && <p> * El campo es requerido</p>}
                {errors.email?.type ==='pattern' && <p> * El formato es incorrecto</p>}
            </div>
            <div>
                <label>Teléfono</label>
                <input type="text" name="telefono" {...register('telefono',{ required: true })}/>
                {errors.telefono?.type ==='required' && <p> * El campo es requerido</p>}
            </div>
                <input type="submit" value="Enviar" />
        </form>
    </div>  
  );
}
