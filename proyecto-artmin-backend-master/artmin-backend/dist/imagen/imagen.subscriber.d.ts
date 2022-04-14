import { Connection, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { ImagenEntity } from './imagen.entity';
import { ImagenService } from './imagen.service';
export declare class ImagenSubscriber implements EntitySubscriberInterface<ImagenEntity> {
    readonly connection: Connection;
    private readonly _imagenService;
    constructor(connection: Connection, _imagenService: ImagenService);
    listenTo(): typeof ImagenEntity;
    beforeUpdate(event: InsertEvent<ImagenEntity>): Promise<InsertEvent<ImagenEntity>>;
}
