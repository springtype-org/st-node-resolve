const {
  NodeJsInputFileSystem,
  CachedInputFileSystem,
  ResolverFactory 
} = require('enhanced-resolve');

const defaultResolver = ResolverFactory.createResolver({
  fileSystem: new CachedInputFileSystem(new NodeJsInputFileSystem(), 4000), // max. 4 sec. timeout
  extensions: ['', '.ts', '.js', '.json'] // order of file extensions to use when none is given
});

const resolveContext = {};

export const resolve = async(importRequest: string, basePath: string): Promise<string> => {
  return new Promise((_resolve: Function, _reject: Function) => {
    defaultResolver.resolve({}, basePath, importRequest, resolveContext, (err: Error, filePath: string) => {
      if (err) _reject(err);
      _resolve(filePath);
    });
  });  
}