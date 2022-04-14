import {HttpStatus, Injectable, InternalServerErrorException} from '@nestjs/common';
import {Connection, EntitySubscriberInterface, InsertEvent} from 'typeorm';
import {InjectConnection} from '@nestjs/typeorm';
import {ImagenEntity} from './imagen.entity';
import {ImagenService} from './imagen.service';

@Injectable()
export class ImagenSubscriber
    implements EntitySubscriberInterface<ImagenEntity> {
    constructor(
        @InjectConnection() readonly connection: Connection,
        private readonly _imagenService: ImagenService,
    ) {
        connection.subscribers.push(this);
    }

    listenTo() {
        return ImagenEntity;
    }

    async beforeUpdate(event: InsertEvent<ImagenEntity>):
        Promise<InsertEvent<ImagenEntity>> {
        try {
            // const consulta = {
            //     where: {
            //         url: event.entity.url,
            //     }
            // };
            // const imagenesConIgualUrl = await this._imagenService.find(consulta);
            // const idsImagenesConIgualUrl = (imagenesConIgualUrl[0] as ImagenEntity[])
            //     .map(imagen => imagen.id);
            // if (idsImagenesConIgualUrl && idsImagenesConIgualUrl[0]) {
            //     this._imagenService._imagenRepository.update(
            //         idsImagenesConIgualUrl,
            //         {
            //             url: event.entity.url
            //         }
            //     );
            // }
            return event;
        } catch (e) {
            console.error(
                {
                    error: e,
                },
            );
        }
    }
}
