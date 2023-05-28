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
const { generatePass } = require(generate-pass);

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


Note: **type** only contains options: 1, 2, 3.
|type  | Description                                       | 
|------|---------------------------------------------------|
|1     | only use of letters                               |
|2     | Use of letters and numbers                        |
|3     | Use of letters, numbers and special characters    |



</br>
</br>
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
const { generatePass } = require(generate-pass);

const password = generatePass();

console.log(password);
//hlxXF7Aa

//--------------------------------------------

const password2 = generatePass(10, 30, 3);

console.log(password2)
//4Ss02Tx2mS5tmVEUl$467C57w/VD
```

### Parametros permitidos


| Nombre              | Descripción                                                   | Valor por defecto |
|---------------------|---------------------------------------------------------------|-------------------|
| min                 | Integer, longitud mínima de la contraseña.                    | 8                 |
| max                 | Integer, longitud máxima de la contraseña.                    | 20                |
| type                | Integer, define el tipo de datos usados para la contraseña.   | 2                 |

Nota: **type** solo contiene opciones de: 1, 2, 3.
|type  | Descripción                                     | 
|------|-------------------------------------------------|
|1     | Solo uso de letras                              |
|2     | Uso de letras y números                         |
|3     | Uso de letras, números y caracteres especiales  |



</br>
</hr>
