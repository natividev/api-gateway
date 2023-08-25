import { Module } from '@nestjs/common';
import { ClienteProxySuperFlights } from './client-proxy';

@Module({
  providers: [ClienteProxySuperFlights],
  exports: [ClienteProxySuperFlights],
})
export class ProxyModule {}
