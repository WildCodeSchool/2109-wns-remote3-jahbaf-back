import { prisma } from 'src/client';
import { MissingMandatoryFieldException } from 'src/exceptions';
import { createProject } from './createProject.mutation';

describe('[Resolver] Create project', () => {
    beforeEach(async () => {
        await prisma.project.deleteMany({});
    });
    it('should create a new project', async () => {
        await createProject(null, {
            projectInput: {
                name: 'testName',
                description: 'testDescription',
                published: false
            }
        });

        const project = await prisma.project.findFirst({
            where: {
                name: 'testName'
            }
        });
        expect(project).toBeTruthy();
        expect(project).toHaveProperty('createdAt');
        expect(project).toHaveProperty('id');
        expect(project!.name).toEqual('testName');
        expect(project!.description).toEqual('testDescription');
    });

    it('should throw a MissingMandatoryFieldException', async () => {
        expect(createProject(null, {
            projectInput: {
                name: '',
                description: 'testDescription',
                published: false
            }
        })).rejects.toThrow(new MissingMandatoryFieldException());

        const project = await prisma.project.findFirst({
            where: {
                description: 'testDescription'
            }
        });

        expect(project).toBeFalsy();
    });
});