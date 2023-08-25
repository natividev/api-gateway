import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ClienteProxySuperFlights } from 'src/common/proxy/client-proxy';
import { UserDTO } from './dto';
import { Observable } from 'rxjs';
import { IUser } from 'src/common/proxy/interface';
import { UserMSG } from 'src/common/constants/contants';

@Controller('user')
export class UserController {
  constructor(private readonly clienteProxy: ClienteProxySuperFlights) {}
  private _clienteProxyUser = this.clienteProxy.clienteProxyUser();

  @Post()
  create(@Body() userDto: UserDTO): Observable<IUser> {
    return this._clienteProxyUser.send(UserMSG.CREATE, userDto);
  }

  @Get()
  findAll(): Observable<IUser[]> {
    return this._clienteProxyUser.send(UserMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<IUser> {
    return this._clienteProxyUser.send(UserMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() userDto: UserDTO): Observable<IUser> {
    return this._clienteProxyUser.send(UserMSG.UPDATE_USER, { id, userDto });
  }

  @Put(':id')
  delete(@Param('id') id: number): Observable<any> {
    return this._clienteProxyUser.send(UserMSG.DELETE_USER, id);
  }
}
