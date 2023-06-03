**Indice**
1. [Spanish](#generador-de-contraseñas)
2. [English](#generate-pass)


# Generate Pass

> Random password generator customizable between the types of data used.

## Install
```bash
$ npm install generate-pass --save
```

## Usage
### generatePass(min, max, type)

Generates a password from the parameters sent, all are optional, so it can be used without sending any, but they remain enabled, it returns a string.

```javascript
const { generatePass } = require('generate-pass');

const password = generatePass();

console.log(password);
//hlxXF7Aa

//--------------------------------------------

const password2 = generatePass(10, 30, 3);

console.log(password2)
//4Ss02Tx2mS5tmVEUl$467C57w/VD
```


### Available options
| Name                | Description                                                | Defect Value   |
|---------------------|------------------------------------------------------------|----------------|
| min                 | Integer, minimum password length.                          | 8              |
| max                 | Integer, maximum password length.                          | 20             |
| type                | Integer, defines the type of data used for the password.   | 2              |


Note: **type** only contains options: 0, 1, 2, 3.
|type  | Description                                       | 
|------|---------------------------------------------------|
|0     | only use of letters lower                         |
|1     | only use of letters upper                         |
|2     | Use of letters and numbers                        |
|3     | Use of letters, numbers and special characters    |



</br>
</br>


### validatePass(min, max, type, pass)

validate the password with the formated (see table)

```javascript
const { validatePass } = require('generate-pass');

const status = validatePass(8, 20, 3, 'aG5jdjh53');

console.log(status);
//the formate the password is ok

//--------------------------------------------

const status2 = validatePass(8, 20, 0, 'aG5jdjh53');

console.log(status2)
//the formate isn't correct
```



#### Parametros permitidos
| Name                | Description                                                | Defect Value   |
|---------------------|------------------------------------------------------------|----------------|
| min                 | Integer, minimum password length.                          | 8              |
| max                 | Integer, maximum password length.                          | 20             |
| type                | Integer, defines the type of data used for the password.   | 2              |
| pass                | String, the password.                                      | ''             |


Note: **type** only contains options: 0, 1, 2, 3.
|type  | Description                                       | 
|------|---------------------------------------------------|
|0     | only use of letters lower                         |
|1     | only use of letters upper                         |
|2     | Use of letters and numbers                        |
|3     | Use of letters, numbers and special characters    |



</br>
</hr>
</br>
</br>
</br>
</hr>


# Generador de contraseñas

> Generador de contraseñas de manera aleatorias personalizable entre los tipos de datos usados.


## Instalación
```bash
$ npm install generate-pass --save
```

## Uso

### generatePass(min, max, type)

Genera una contraseña a apartir de los parametros enviados, todos son opcionales, asi que se puede usar sin enviar alguno, pero quedan habilitados, retorna un string.

```javascript
const { generatePass } = require('generate-pass');

const password = generatePass();

console.log(password);
//hlxXF7Aa

//--------------------------------------------

const password2 = generatePass(10, 30, 3);

console.log(password2)
//4Ss02Tx2mS5tmVEUl$467C57w/VD
```



#### Parametros permitidos
| Nombre              | Descripción                                                   | Valor por defecto |
|---------------------|---------------------------------------------------------------|-------------------|
| min                 | Integer, longitud mínima de la contraseña.                    | 8                 |
| max                 | Integer, longitud máxima de la contraseña.                    | 20                |
| type                | Integer, define el tipo de datos usados para la contraseña.   | 2                 |

Nota: **type** solo contiene opciones de: 0, 1, 2, 3.
|type  | Descripción                                     | 
|------|-------------------------------------------------|
|0     | Solo uso de letras minusculas                   |
|1     | Solo uso de letras mayusculas                   |
|2     | Uso de letras y números                         |
|3     | Uso de letras, números y caracteres especiales  |



</br>
</hr>

### validatePass(min, max, type, pass)

Valida la contraseña enviada en los parametros, verificando si cumple con el formato especificado (vease el cuadro de abajo).

```javascript
const { validatePass } = require('generate-pass');

const status = validatePass(8, 20, 3, 'aG5jdjh53');

console.log(status);
//the formate the password is ok

//--------------------------------------------

const status2 = validatePass(8, 20, 0, 'aG5jdjh53');

console.log(status2)
//the formate isn't correct
```



#### Parametros permitidos
| Nombre              | Descripción                                                   | Valor por defecto |
|---------------------|---------------------------------------------------------------|-------------------|
| min                 | Integer, longitud mínima de la contraseña.                    | 8                 |
| max                 | Integer, longitud máxima de la contraseña.                    | 20                |
| type                | Integer, define el tipo de datos usados para la contraseña.   | 2                 |
| pass                | String, contraseña.                                           | ''                |

Nota: **type** solo contiene opciones de: 0, 1, 2, 3.
|type  | Descripción                                     | 
|------|-------------------------------------------------|
|0     | Solo uso de letras minusculas                   |
|1     | Solo uso de letras mayusculas                   |
|2     | Uso de letras y números                         |
|3     | Uso de letras, números y caracteres especiales  |



</br>
</hr>
