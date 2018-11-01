'use strict';

var _powerAssertVisitorKeys = '{"ArrayExpression":["elements"],"AssignmentExpression":["left","right"],"BinaryExpression":["left","right"],"Directive":["value"],"DirectiveLiteral":[],"BlockStatement":["directives","body"],"BreakStatement":["label"],"CallExpression":["callee","arguments"],"CatchClause":["param","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["test","body"],"EmptyStatement":[],"ExpressionStatement":["expression"],"File":["program"],"ForInStatement":["left","right","body"],"ForStatement":["init","test","update","body"],"FunctionDeclaration":["id","params","body","returnType","typeParameters"],"FunctionExpression":["id","params","body","returnType","typeParameters"],"Identifier":["typeAnnotation"],"IfStatement":["test","consequent","alternate"],"LabeledStatement":["label","body"],"StringLiteral":[],"NumericLiteral":[],"NullLiteral":[],"BooleanLiteral":[],"RegExpLiteral":[],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"NewExpression":["callee","arguments"],"Program":["directives","body"],"ObjectExpression":["properties"],"ObjectMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectProperty":["key","value","decorators"],"RestElement":["argument","typeAnnotation"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"SwitchCase":["test","consequent"],"SwitchStatement":["discriminant","cases"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"AssignmentPattern":["left","right"],"ArrayPattern":["elements","typeAnnotation"],"ArrowFunctionExpression":["params","body","returnType","typeParameters"],"ClassBody":["body"],"ClassDeclaration":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ClassExpression":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ExportAllDeclaration":["source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["local","exported"],"ForOfStatement":["left","right","body"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["local","imported"],"MetaProperty":["meta","property"],"ClassMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectPattern":["properties","typeAnnotation"],"SpreadElement":["argument"],"Super":[],"TaggedTemplateExpression":["tag","quasi"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"YieldExpression":["argument"],"AnyTypeAnnotation":[],"ArrayTypeAnnotation":["elementType"],"BooleanTypeAnnotation":[],"BooleanLiteralTypeAnnotation":[],"NullLiteralTypeAnnotation":[],"ClassImplements":["id","typeParameters"],"ClassProperty":["key","value","typeAnnotation","decorators"],"DeclareClass":["id","typeParameters","extends","body"],"DeclareFunction":["id"],"DeclareInterface":["id","typeParameters","extends","body"],"DeclareModule":["id","body"],"DeclareModuleExports":["typeAnnotation"],"DeclareTypeAlias":["id","typeParameters","right"],"DeclareOpaqueType":["id","typeParameters","supertype"],"DeclareVariable":["id"],"DeclareExportDeclaration":["declaration","specifiers","source"],"ExistentialTypeParam":[],"FunctionTypeAnnotation":["typeParameters","params","rest","returnType"],"FunctionTypeParam":["name","typeAnnotation"],"GenericTypeAnnotation":["id","typeParameters"],"InterfaceExtends":["id","typeParameters"],"InterfaceDeclaration":["id","typeParameters","extends","body"],"IntersectionTypeAnnotation":["types"],"MixedTypeAnnotation":[],"EmptyTypeAnnotation":[],"NullableTypeAnnotation":["typeAnnotation"],"NumericLiteralTypeAnnotation":[],"NumberTypeAnnotation":[],"StringLiteralTypeAnnotation":[],"StringTypeAnnotation":[],"ThisTypeAnnotation":[],"TupleTypeAnnotation":["types"],"TypeofTypeAnnotation":["argument"],"TypeAlias":["id","typeParameters","right"],"OpaqueType":["id","typeParameters","impltype","supertype"],"TypeAnnotation":["typeAnnotation"],"TypeCastExpression":["expression","typeAnnotation"],"TypeParameter":["bound"],"TypeParameterDeclaration":["params"],"TypeParameterInstantiation":["params"],"ObjectTypeAnnotation":["properties","indexers","callProperties"],"ObjectTypeCallProperty":["value"],"ObjectTypeIndexer":["id","key","value"],"ObjectTypeProperty":["key","value"],"ObjectTypeSpreadProperty":["argument"],"QualifiedTypeIdentifier":["id","qualification"],"UnionTypeAnnotation":["types"],"VoidTypeAnnotation":[],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXSpreadChild":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"Noop":[],"ParenthesizedExpression":["expression"],"AwaitExpression":["argument"],"ForAwaitStatement":["left","right","body"],"BindExpression":["object","callee"],"Import":[],"Decorator":["expression"],"DoExpression":["body"],"ExportDefaultSpecifier":["exported"],"ExportNamespaceSpecifier":["exported"],"RestProperty":["argument"],"SpreadProperty":["argument"]}',
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }();

const test = require('ava');

const Script = require('..');
const { beforeEach, afterEach } = require('./helpers');

test.beforeEach(beforeEach);
test.afterEach(afterEach);

test('returns itself', t => {
  var _rec = new _powerAssertRecorder();

  t.true(_rec._expr(_rec._capt(_rec._capt(_rec._capt(_rec._capt(t, 'arguments/0/left/object/object').context, 'arguments/0/left/object').script, 'arguments/0/left') instanceof _rec._capt(Script, 'arguments/0/right'), 'arguments/0'), {
    content: 't.true(t.context.script instanceof Script)',
    filepath: 'test/test.js',
    line: 10,
    ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"t","range":[0,1]},"property":{"type":"Identifier","name":"true","range":[2,6]},"computed":false,"range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"instanceof","left":{"type":"MemberExpression","object":{"type":"MemberExpression","object":{"type":"Identifier","name":"t","range":[7,8]},"property":{"type":"Identifier","name":"context","range":[9,16]},"computed":false,"range":[7,16]},"property":{"type":"Identifier","name":"script","range":[17,23]},"computed":false,"range":[7,23]},"right":{"type":"Identifier","name":"Script","range":[35,41]},"range":[7,41]}],"range":[0,42]}',
    tokens: '[{"type":{"label":"name"},"value":"t","range":[0,1]},{"type":{"label":"."},"range":[1,2]},{"type":{"label":"true"},"value":"true","range":[2,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"t","range":[7,8]},{"type":{"label":"."},"range":[8,9]},{"type":{"label":"name"},"value":"context","range":[9,16]},{"type":{"label":"."},"range":[16,17]},{"type":{"label":"name"},"value":"script","range":[17,23]},{"type":{"label":"instanceof"},"value":"instanceof","range":[24,34]},{"type":{"label":"name"},"value":"Script","range":[35,41]},{"type":{"label":")"},"range":[41,42]}]',
    visitorKeys: _powerAssertVisitorKeys
  }));
});

test('sets a config object', t => {
  var _rec2 = new _powerAssertRecorder();

  const script = new Script(false);
  t.true(_rec2._expr(_rec2._capt(_rec2._capt(script, 'arguments/0/left') instanceof _rec2._capt(Script, 'arguments/0/right'), 'arguments/0'), {
    content: 't.true(script instanceof Script)',
    filepath: 'test/test.js',
    line: 15,
    ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"t","range":[0,1]},"property":{"type":"Identifier","name":"true","range":[2,6]},"computed":false,"range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"instanceof","left":{"type":"Identifier","name":"script","range":[7,13]},"right":{"type":"Identifier","name":"Script","range":[25,31]},"range":[7,31]}],"range":[0,32]}',
    tokens: '[{"type":{"label":"name"},"value":"t","range":[0,1]},{"type":{"label":"."},"range":[1,2]},{"type":{"label":"true"},"value":"true","range":[2,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"script","range":[7,13]},{"type":{"label":"instanceof"},"value":"instanceof","range":[14,24]},{"type":{"label":"name"},"value":"Script","range":[25,31]},{"type":{"label":")"},"range":[31,32]}]',
    visitorKeys: _powerAssertVisitorKeys
  }));
});

test('renders name', t => {
  const { script } = t.context;
  t.is(script.renderName(), 'script');
});

test('sets a default name', t => {
  const { script } = t.context;
  t.is(script._name, 'script');
});
//# sourceMappingURL=/Users/swarman/Development/Source/superfriends/digest-directory/node_modules/.cache/ava/d450457f94cd962e0f9ec277e97d06b2.js.map