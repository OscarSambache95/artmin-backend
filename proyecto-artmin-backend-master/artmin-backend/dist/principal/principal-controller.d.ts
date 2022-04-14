export declare abstract class PrincipalAbstractController<Entidad> {
    private readonly _servicio;
    constructor(servicio: any);
    findAll(criterioBusqueda: any): Promise<Entidad[]>;
    findOne(id: any): Promise<any>;
    delete(id: any): Promise<any>;
    create(registro: any): Promise<any>;
    update(id: any, registro: any): Promise<any>;
}
