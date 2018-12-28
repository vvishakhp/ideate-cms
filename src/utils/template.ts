import { Template } from "../models/template";
import { Application } from '../application/Application';
import { existsSync } from "fs";
import { join } from "path";

export class TemplateUtil {
    
}

export enum TemplateNameValidationResult {
    VALID, NOTVALID, EXISTS
}